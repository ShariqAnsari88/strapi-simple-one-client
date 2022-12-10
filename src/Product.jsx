import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProductCard({ data }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="250"
                image={
                    "https://strapi-simple-one-production.up.railway.app" +
                    data.attributes.image.data[1].attributes.url
                }
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {data.attributes.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {data.attributes.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.attributes.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
