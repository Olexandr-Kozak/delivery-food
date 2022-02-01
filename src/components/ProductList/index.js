import React from "react";
import {useParams} from "react-router";
import ProductCard from "../ProductCard";
import usePageData from "../../custom-hooks/usePageData";
import Spinner from "../Spinner";

const ProductList = () => {

  const { products } = useParams();
  const productList = usePageData(products);
  const minPrice = Math.min.apply(null, productList?.data.map(el => el.price));

  if(!productList){
    return <Spinner classPrefix="spinner"/>
  }

  return (
      <section className='menu'>
        <div className="section-heading">
          <h2 className="section-title restaurants-title">{productList?.partnerName}</h2>
          <div className="card-info">
            <div className="rating">
              4.5
            </div>
            <div className="price">От {minPrice} грн</div>
            <div className="category">{productList?.category}</div>
          </div>

        </div>

        <div className="cards cards-menu">
          {productList?.data.map(restaurant => {
            return <ProductCard key={restaurant.id} {...restaurant} />
          })}
        </div>
        {products}
      </section>
  )
}

export default ProductList;