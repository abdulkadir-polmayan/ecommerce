import React from "react";
import Product from "../components/Product";
import { client } from "../lib/client";
const index = ({ products, bannerData }) => {
  return (
    <>
      <h1 className="hed">abdulkasd</h1>
      {products?.map((products)=><h1>{products.price}</h1>)}
      <Product />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default index;
