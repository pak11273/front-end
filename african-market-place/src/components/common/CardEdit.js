import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const CardEdit = props => {
  const { id } = useParams();
  const { state } = useLocation();

  const [product, setProduct] = useState(state);

  const onChange = (name, value) => {
    setProduct({
      [name]: value,
    });
  };

  const {
    item_name,
    item_category,
    item_price,
    item_qty,
    item_qty_measurement,
  } = props;

  return (
    <div>
      <h2>id: {id} </h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1>name: {item_name}</h1>
        <input
          style={{ maxWidth: '200px' }}
          type="text"
          name="item_name"
          value={product.item_name}
          placeholder={state.item_name}
          onChange={onChange}
        />
      </div>
      <h3>price: {item_price}</h3>
      <h4>quantity: {item_qty}</h4>
      <h4>quantity measurement: {item_qty_measurement}</h4>
      <h4>Category: {item_category}</h4>
      <button className="edit-item">Save Item</button>
    </div>
  );
};
