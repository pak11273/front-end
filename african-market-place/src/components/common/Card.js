import React from 'react';
import { useHistory } from 'react-router-dom';

export const Card = props => {
  const { push } = useHistory();

  const pushToEditItem = (e, props) => {
    push(`/edititem/${props.id}`, props);
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
    <div>
      <h1>name: {item_name}</h1>
      <h2>id: {id}</h2>
      <h3>price: {item_price}</h3>
      <h4>quantity: {item_qty}</h4>
      <h4>quantity measurement: {item_qty_measurement}</h4>
      <h4>Category: {item_category}</h4>
      <button className="edit-item" onClick={e => pushToEditItem(e, props)}>
        Edit Item
      </button>
    </div>
  );
};
