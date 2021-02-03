import React from 'react';

export const CardInput = ({ label, product, onChange }) => {
  let item;
  let name;

  switch (label) {
    case 'name':
      item = product.item_name;
      name = 'item_name';
      break;
    case 'price':
      item = product.item_price;
      name = 'item_price';
      break;
    case 'quantity':
      item = product.item_qty;
      name = 'item_qty';
      break;
    case 'measurement':
      item = product.item_qty_measurement;
      name = 'item_qty_measurement';
      break;
    case 'category':
      item = product.item_category;
      name = 'item_category';
      break;
    default:
      break;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <h1 style={{ marginRight: '10px' }}>{label}: </h1>
      <input
        style={{ maxWidth: '200px', height: '30px' }}
        type="text"
        name={name}
        defaultValue={item}
        onChange={onChange}
      />
    </div>
  );
};
