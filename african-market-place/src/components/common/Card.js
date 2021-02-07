import React from 'react';
import { useHistory } from 'react-router-dom';

export const Card = props => {
  const { push } = useHistory();

  const pushToEditItem = (e, props) => {
    push(`/edititem/${props.id}`, props);
  };

  const pushToDeleteItem = (e, props) => {
    push(`/deleteitem/${props.id}`, props);
    //add axios call
    // axiosWithAuth()
    //   .delete(`https://african-marketplace-tt14.herokuapp.com/${id}`)
    //   .then(res => {
    //     console.log(res);
    //     dispatch(deleteItem(id));
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  const {
    id,
    item_name,
    item_category,
    item_price,
    item_qty,
    item_qty_measurement,
  } = props;

  return (
    <div
      style={{
        padding: '20px',
        margin: '20px auto',
        background: 'black',
        opacity: '80%',
        borderRadius: '2%',
        border: '1px solid white',
        width: '300px',
      }}
    >
      <h1>name: {item_name}</h1>
      <h6>id: {id}</h6>
      <h6>price: {item_price}</h6>
      <h6>quantity: {item_qty}</h6>
      <h6>measurement: {item_qty_measurement}</h6>
      <h6>Category: {item_category}</h6>
      {/* if owner then show these buttons */}
      {/* 
      <input
        type="button"
        value="edit"
        className="edit-item button primary"
        style={{
          height: '2em',
          lineHeight: '2em',
          padding: '0 1em',
          marginRight: '1em',
        }}
        onClick={e => pushToEditItem(e, props)}
      />
      <input
        className="delete-item button"
        type="button"
        value="delete"
        style={{ height: '2em', lineHeight: '2em', padding: '0 1em' }}
        onClick={e => pushToDeleteItem(e, props)}
      />
      */}
    </div>
  );
};
