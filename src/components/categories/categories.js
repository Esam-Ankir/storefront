import React, { useState } from 'react';
import { connect } from 'react-redux';
import { active, reset } from '../../store/categories';
import { getByCategory } from '../../store/products'
import { Grid, Grow } from '@material-ui/core';
import Products from '../products/details';
import UseStyles from './categories.style';
import "./categories.scss";

const Categories = (props) => {

    const classes = UseStyles();

    const [showProducts, setShowProducts] = useState(false)

    return (
        <>
            <div >
                <li
                    onClick={() => {
                        props.reset();
                        props.active("FOOD");
                        props.getByCategory("FOOD");
                        setShowProducts(true);
                    }}>
                    {"FOOD"}
                </li>
                <li
                    onClick={() => {
                        props.reset();
                        props.active("ELECTRONICS");
                        props.getByCategory(props.categories[1].name);
                        setShowProducts(true);
                    }}>
                    {"ELECTRONICS"}
                </li>
                <li
                    onClick={() => {
                        props.reset();
                        props.active("GAMES");
                        props.getByCategory("GAMES");
                        setShowProducts(true);
                    }}>
                    {"GAMES"}
                </li>
                <li
                    onClick={() => {
                        props.reset();
                        props.active("WEAPONS");
                        props.getByCategory("WEAPONS");
                        setShowProducts(true);
                    }}>
                    {"WEAPONS"}
                </li>
            </div>
            {
                showProducts ?
                    <Grow in>
                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                            {props.products.map((prod, i) => (
                                <Grid
                                    item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }} key={i}>
                                    <Products Products={prod} i={i} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grow>
                    : null}

        </>
    )
}
const mapStateToProps = (state) => ({ categories: state.categories.categories, products: state.products.products })

const mapDispatchToProps = { active, reset, getByCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);