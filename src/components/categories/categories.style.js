import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@mui/material/styles';
export default makeStyles({
    media: {
        height: 200,
        minWidth: 1
    },
    border: {
        border: 'solid'
    },
    fullHeightCard: {
        height: '100%'
    },
    card: {
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white'
    },
    activeCard: {
        borderBottom: '10px solid #22289a'
    },
    grid: {
        display: 'flex'
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
    },
    title: {
        padding: '0px 16px'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    link: {
        textDecoration: 'none'
    },
    card1: {
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '45vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white'
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    container: {
        padding: '10% 10%',
        width: '100%',
        margin: 0
    }
});