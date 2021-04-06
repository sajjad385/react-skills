import react from 'react'
import {useSelector} from "react-redux";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    button: {
        margin: theme.spacing(1),
    },
    table: {
        minWidth: 700,
    },
}));

const Cart = () => {
    const classes = useStyles();
    const products = useSelector(state => state.cartStore)
    console.log(products)
    return (
        <div className='container'>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Product Name</StyledTableCell>
                            <StyledTableCell align="center">Image</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Quantity</StyledTableCell>
                            <StyledTableCell align="center">Total Price</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.product!== undefined &&
                        products.product.map((item, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="center">{item.title}</StyledTableCell>
                            <StyledTableCell align="center">
                                <img src={item.image} alt="" width='100' height='100'/>
                            </StyledTableCell>
                            <StyledTableCell align="center">{item.price}</StyledTableCell>
                            <StyledTableCell align="center">{products.cart}</StyledTableCell>
                            <StyledTableCell align="center">fsdf</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button variant="contained" color="primary" className={classes.button}>Remove</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>

    )
}
export default Cart


