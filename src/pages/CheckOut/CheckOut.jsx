import React from "react";
import {useLoaderData} from "react-router-dom";

const CheckOut = () => {
  const services = useLoaderData();
  const {title, price, service_id, _id} = services;
  return (
    <div>
      <h2 className="text-5xl font-bold">{title}</h2>
      <h2 className="text-5xl font-bold">{price}</h2>
      <h2 className="text-5xl font-bold">{service_id}</h2>
      <h2 className="text-5xl font-bold">{_id}</h2>
    </div>
  );
};

export default CheckOut;
