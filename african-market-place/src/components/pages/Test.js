import React from 'react';

export const Test = () => {
  const handleClick = e => {
    console.log('e.target.name: ', e.target.name);
    setTimeout(() => {
      // supposedly you e.target.name would be null because supposedly events are pooled and so their properties are reset so they can be reused, but it appears that this is not the case.  This log should return null, but in fact it logs the name
      console.log('e.target.name: ', e.target.name);
    }, 3000);
  };

  return (
    <>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <button name="foo" onClick={handleClick}>
        click
      </button>
    </>
  );
};
