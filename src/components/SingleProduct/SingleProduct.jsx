import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

import "./SingleProduct.scss";

const SingleProduct = () => {
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    if (!data) return;
    const product = data?.data?.[0]?.attributes;
    return (
        <div className="main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={
                                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                product.image.data[0].attributes.url
                            }
                        />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc">
                            &#8377;{product.description}
                        </span>
                    </div>
                </div>
                <RelatedProducts
                    productId={id}
                    categoryId={product.categories.data[0].id}
                />
            </div>
        </div>
    );
};

export default SingleProduct;
