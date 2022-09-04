import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import UseStyles from '../categories/categories.style';

export default function Products({
    Products: { description, publishedAt, displayName, title, url, categoryAssociation, image }, i }) {
    const classes = UseStyles();

    return (
        <Card className={classes.card} key={i}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia
                    className={classes.media}
                    image={image} />
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' gutterBottom variant='h5' >{displayName}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>ADD TO CART</Button>
                <Button size='small' color='primary'>VIEW DETAILS</Button>
            </CardActions>
        </Card>
    )
}