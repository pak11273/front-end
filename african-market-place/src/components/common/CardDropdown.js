import React from 'react';

export const CardDropdown = ({ label, product, onChange }) => {
  let item;
  let name;
  let options;

  switch (label) {
    case 'category':
      item = product.item;
      name = 'item_category';
      break;
    default:
      break;
  }

  let categories = (
    <select
      style={{ maxWidth: '200px', height: '30px' }}
      type="text"
      name={name}
      defaultValue={item}
      onChange={onChange}
    >
      <option value="">-- select --</option>
      <option value="Animal Products">Animal Products</option>
      <option value="Beans">Beans</option>
      <option value="Cereals - Maize">Cereals - Maize</option>
      <option value="Cereals - Other">Cereals - Other</option>
      <option value="Cereals - Rice">Cereals - Rice</option>
      <option value="Fruits">Fruits</option>
      <option value="Other">Other</option>
      <option value="Other">Other</option>
      <option value="Peas">Peas</option>
      <option value="Roots & Tubers">Roots & Tubers</option>
      <option value="Seeds & Nuts">Seeds & Nuts</option>
      <option value="Vegetables">Vegetables</option>
    </select>
  );

  switch (label) {
    case 'category':
      name = 'item_category';
      options = categories;
      break;
    default:
      break;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <h1 style={{ marginRight: '10px' }}>{label}: </h1>
      {options}
    </div>
  );
};
