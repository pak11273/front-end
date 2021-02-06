import * as yup from 'yup';

import React, { useState } from 'react';
// import { addItem, itemId } from "../../utils/actions";
// import { useDispatch } from "react-redux";
import Button from './Button';
import { CardDropdown } from './CardDropdown';
import { CardInput } from './CardInput';
import { CardSchema } from '../../schema';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';

const initialState = {
  item_name: '',
  item_category: '',
  item_price: '',
  item_qty: '',
  item_qty_measurement: '',
};

export const CardAdd = props => {
  const [ProductValues, setProductValues] = useState(initialState);
  const [errors, setErrors] = useState({
    item_name: '',
    item_category: '',
    item_price: '',
    item_qty: '',
    item_qty_measurement: '',
  });
  const [disabled, setDisabled] = useState(true);
  const { push } = useHistory();

  const onChange = e => {
    // const { name, value } = e.target;
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'item_qty') {
      value = parseInt(value, 10);
    } else if (name === 'item_price') {
      value = parseInt(value, 10);
    } else {
      // eslint-disable-next-line
      value = value;
    }
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
    axiosWithAuth()
      .post(
        'https://african-marketplace-tt14.herokuapp.com/api/items',
        ProductValues
      )
      .then(response => {
        console.log(response);
        //dispatch(addItem(res.data))
        //dspatch(itemid(res.data.id))
        //not sure what kind of obj we get
        //tying to manage the state of itemId getting 500 error
        push('/dashboard');
      })
      .catch(error => {
        console.log(error);
      });
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
        buttonText="Add Item"
        classType="edit-item"
        style={{ display: 'flex', margin: '40px auto' }}
        disabled={disabled}
      />
      <button onClick={pushToDash}>Back</button>
    </form>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     item_id:state.id,
//     items: state.items,
//   }
// }

// connect(mapStateToProps,{addItem,itemId})(CardAdd);

//manging state with redux
//commented out beacuse getting 500 error from server
