import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="sec-heading">Shop by Category</div>
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <div className="img-sec">
                            <img
                                src={
                                    process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                    item.attributes.img.data.attributes.url
                                }
                            />
                            <div className="bg" />
                        </div>
                        <div className="title">{item.attributes.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
