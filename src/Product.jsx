import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "./makeRequest";

export default function ProductCard({ data }) {
    const BASE_URL = process.env.REACT_APP_STRIPE_APP_DEV_URL;

    const stripePromise = loadStripe(
        "pk_test_51MDp33SD8BxA31DW0RfZehhQP0BqgUiYliXnGZkE4jA4bUjtzwirmGhz7ngpp7RZLM3EHdpjX0UUKWNllRlPROC800l7vtgVb1"
    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/api/orders", {
                products: [data],
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card sx={{ maxWidth: 345 }} onClick={handlePayment}>
            <CardMedia
                component="img"
                height="250"
                image={BASE_URL + data.attributes.image.data[1].attributes.url}
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
