import * as yup from 'yup';

import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';
import { CardDropdown } from './CardDropdown';
import { CardInput } from './CardInput';
import { CardSchema } from '../../schema';

// import axios from 'axios';

const initialValues = {
  id: '',
  item_name: '',
  item_category: '',
  item_price: '',
  item_qty: '',
  item_qty_measurement: '',
};

export const CardEdit = props => {
  const { id } = useParams();
  // const { state } = useLocation();
  const { push } = useHistory();

  const [ProductValues, setProductValues] = useState(initialValues);
  const [errors, setErrors] = useState({
    id: '',
    item_name: '',
    item_category: '',
    item_price: '',
    item_qty: '',
    item_qty_measurement: '',
  });
  const [disabled, setDisabled] = useState(true);

  const onChange = e => {
    const { name, value } = e.target;
    setProductValues({
      ...ProductValues,
      [name]: value,
    });
    updateProductValues(name, value);
  };

  const updateProductValues = (name, value) => {
    yup
      .reach(CardSchema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: '' });
        setDisabled(false);
      })
      .catch(error => {
        setErrors({ ...errors, [name]: error.errors[0] });
        setDisabled(true);
      });

    setProductValues({ ...ProductValues, [name]: value });
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

  const pushToDash = () => {
    push('/dashboard');
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
        <div style={{ color: 'red' }}>{errors.item_name}</div>
        <CardInput label="price" product={ProductValues} onChange={onChange} />
        <div style={{ color: 'red' }}>{errors.item_price}</div>
        <CardInput
          label="quantity"
          product={ProductValues}
          onChange={onChange}
        />
        <div style={{ color: 'red' }}>{errors.item_qty}</div>
        <CardInput
          label="measurement"
          product={ProductValues}
          onChange={onChange}
        />
        <div style={{ color: 'red' }}>{errors.item_qty_measurement}</div>
        <CardDropdown
          label="category"
          product={ProductValues}
          onChange={onChange}
        />
        <div style={{ color: 'red' }}>{errors.item_category}</div>
      </div>
      <Button
        buttonText="Save Item"
        classType="edit-item"
        style={{ display: 'flex', margin: '40px auto' }}
        disabled={disabled}
      />
      <button onClick = {pushToDash}>Back</button>
    </form>
  );
};
