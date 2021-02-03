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

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          margin: '100px auto 0',
          width: '100%',
          maxWidth: '300px',
        }}
      >
        <h2>id: {id} </h2>
        <CardInput label="name" product={product} onChange={onChange} />
        <CardInput label="price" product={product} onChange={onChange} />
        <CardInput label="quantity" product={product} onChange={onChange} />
        <CardInput label="measurement" product={product} onChange={onChange} />
        <CardInput label="category" product={product} onChange={onChange} />
      </div>
      <button
        className="edit-item"
        style={{ display: 'flex', margin: '40px auto' }}
      >
        Save Item
      </button>
    </form>
  );
};
