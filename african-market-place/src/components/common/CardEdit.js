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
        <CardInput
          name="name"
          item_property={product.item_name}
          onChange={onChange}
        />
        <CardInput
          name="price"
          item_property={product.item_price}
          onChange={onChange}
        />
        <CardInput
          name="quatity"
          item_property={product.item_qty}
          onChange={onChange}
        />
        <CardInput
          name="measurement"
          item_property={product.item_qty_measurement}
          onChange={onChange}
        />
        <CardInput
          name="category"
          item_property={product.item_category}
          onChange={onChange}
        />
      </div>
      <button
        className="edit-item"
        style={{ display: 'flex', margin: '40px auto' }}
      >
        Save Item
      </button>
    </>
  );
};
