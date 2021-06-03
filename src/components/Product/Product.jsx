import React from 'react'
import { Card, CardMedia, CardActions, CardContent, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
const Product = ({ product }) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.name}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoopingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
