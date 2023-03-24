import React from 'react';

const ProductItem = ({ props }) => {

    const { category, description, id, image, price, rating, title } = props;

    return (
        <div className="product-card">
            <h4>{title}</h4>
            <img src={image} alt={description} />
            <p>{price}</p>
        </div>
    )
}

export default ProductItem;