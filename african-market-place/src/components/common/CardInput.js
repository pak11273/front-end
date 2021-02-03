import React from 'react';

export const CardInput = ({ item_property, onChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <h1 style={{ marginRight: '10px' }}>name: </h1>
      <input
        style={{ maxWidth: '200px', height: '30px' }}
        type="text"
        name="item_name"
        value={item_property}
        placeholder={item_property}
        onChange={onChange}
      />
    </div>
  );
};
