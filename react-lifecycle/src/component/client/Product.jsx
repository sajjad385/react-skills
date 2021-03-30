import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";

const Product = ({productList}) => {
    const cartStore = useSelector(state => state)
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 4,
    },
    control: {
      padding: theme.spacing(2),
    },
    media: {
      height: 200,
    },

  }));
  const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });
    const history = useHistory();

    const handleChange = (id) => {
        history.push(`/product-details/${id}`);
    };
    const dispatch = useDispatch();
    const addToCart =()=>{
        dispatch({
            type: 'ADD_TO_CART',
            payload: cartStore.cartStore.cart ?cartStore.cartStore.cart +1: 1
        })
    }

    return (
        <Container>
            <Grid className={classes.root}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {loading === true ? (
                            <div>
                                <img
                                    src={
                                        "https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
                                    }
                                    alt={""}
                                    style={{width: "100%", height: "100vh"}}
                                />
                            </div>
                        ) : (

                            productList.map((product, index) => (

                                <Grid item className="product-list" key={index}>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image="https://wallpapercave.com/wp/wp5952042.jpg"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {product.name}
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="h4">
                                                    ${product.price}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {product.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary" onClick={addToCart}>
                                                Add To Cart
                                            </Button>
                                            <Button size="small" color="secondary" onClick={() => handleChange(index)}>
                                                Learn More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>


                            ))
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Product;
