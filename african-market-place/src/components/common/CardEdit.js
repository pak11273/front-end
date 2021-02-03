import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { CardInput } from './CardInput';
import axios from 'axios';

export const CardEdit = props => {
  const { id } = useParams();
  const { state } = useLocation();

  const [ProductValues, setProductValues] = useState(state);

  const onChange = e => {
    const { name, value } = e.target;
    setProductValues({
      ...ProductValues,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(ProductValues);
    // axios
    //   .post('', ProductValues)
    //   .then(response => {
    //     // pending
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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
        <CardInput label="name" product={ProductValues} onChange={onChange} />
        <CardInput label="price" product={ProductValues} onChange={onChange} />
        <CardInput
          label="quantity"
          product={ProductValues}
          onChange={onChange}
        />
        <CardInput
          label="measurement"
          product={ProductValues}
          onChange={onChange}
        />
        <CardInput
          label="category"
          product={ProductValues}
          onChange={onChange}
        />
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
