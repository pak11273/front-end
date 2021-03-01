import React from 'react';
import { axiosWithAuth } from 'src/utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export const Card = props => {
  const { push } = useHistory();

  const pushToEditItem = id => {
    push(`/edititem/${id}`);
  };

  const pushToDeleteItem = () => {
    push(`/deleteitem/${props.id}`, props);
    // add axios call
    axiosWithAuth()
      .delete(`https://african-marketplace-tt14.herokuapp.com/${id}`)
      .then(res => {
        console.log(res);
        // dispatch(deleteItem(id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const {
    id,
    item_name,
    item_picUrl,
    item_category,
    item_price,
    item_qty,
    item_qty_measurement,
  } = props;

  return (
    <div id="card">
      <img src={item_picUrl} alt="apple-banana" />
      <h1>name: {item_name}</h1>
      {/* if owner then show      <h6>id: {id}</h6> */}
      <h6>price: {item_price}</h6>
      <h6>quantity: {item_qty}</h6>
      <h6>measurement: {item_qty_measurement}</h6>
      <h6>Category: {item_category}</h6>
      {/* if owner then show these buttons */}

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
        onClick={() => pushToEditItem(id)}
      />
      <input
        className="delete-item button"
        type="button"
        value="delete"
        style={{ height: '2em', lineHeight: '2em', padding: '0 1em' }}
        onClick={pushToDeleteItem}
      />
    </div>
  );
};
