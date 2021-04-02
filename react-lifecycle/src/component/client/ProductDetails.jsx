import React from "react";
import {useParams} from "react-router-dom";
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
import {makeStyles} from '@material-ui/core/styles';

const ProductDetails = ({productList}) => {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });
    const classes = useStyles();
    const param = useParams();
    const details = productList[param.id];

    return (
        <Container justify spacing>
            <Grid className={classes.root}>
                <Grid item xs={12}>
                    <Grid  justify="center" spacing={2}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://wallpapercave.com/wp/wp5952042.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {details.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="h4">
                                        ${details.price}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {details.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Add To Cart
                                </Button>
                                <Button size="small" color="secondary">
                                    Add To Wishlist
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
export default ProductDetails;
