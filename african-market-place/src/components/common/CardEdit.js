import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { CardInput } from './CardInput';

export const CardEdit = props => {
  const { id } = useParams();
  const { state } = useLocation();

  const [product, setProduct] = useState(state);

  const onChange = e => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <>
      <div
        style={{
          margin: '100px auto 0',
          width: '100%',
          maxWidth: '300px',
        }}
      >
        <h2>id: {id} </h2>
        <CardInput item_property={product.item_name} onChange={onChange} />
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <h1 style={{ marginRight: '10px' }}>name: </h1>
          <input
            style={{ maxWidth: '200px', height: '30px' }}
            type="text"
            name="item_name"
            value={product.item_name}
            placeholder={product.item_name}
            onChange={onChange}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <h3 style={{ marginRight: '10px' }}>price: </h3>
          <input
            style={{ maxWidth: '200px', height: '30px' }}
            type="text"
            name="item_price"
            value={product.item_price}
            placeholder={product.item_price}
            onChange={onChange}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <h3 style={{ marginRight: '10px' }}>quantity: </h3>
          <input
            style={{ maxWidth: '200px', height: '30px' }}
            type="text"
            name="item_quantity"
            value={product.item_quantity}
            placeholder={product.item_quantity}
            onChange={onChange}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <h3 style={{ marginRight: '10px' }}>measurement:</h3>
          <input
            style={{ maxWidth: '200px', height: '30px' }}
            type="text"
            name="item_qty_measurement"
            value={product.item_qty_measurement}
            placeholder={product.item_qty_measurement}
            onChange={onChange}
            min={1}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <h3 style={{ marginRight: '10px' }}>category:</h3>
          <input
            style={{ maxWidth: '200px', height: '30px' }}
            type="text"
            name="item_category"
            value={product.item_category}
            placeholder={product.item_category}
            onChange={onChange}
          />
        </div>
      </div>
      <button
        className="edit-item"
        style={{ display: 'flex', margin: '0 auto' }}
      >
        Save Item
      </button>
    </>
  );
};
