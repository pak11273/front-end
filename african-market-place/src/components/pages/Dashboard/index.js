// import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../../common/Card';
import React from 'react';
import { useHistory } from 'react-router-dom';

const dummyData = [
  {
    id: 1,
    item_name: 'potato',
    item_category: 'vegetable',
    item_price: '3.99',
    item_qty: 1,
    item_qty_measurement: 'lbs',
  },
  {
    id: 2,
    item_name: 'corn',
    item_category: 'vegetable',
    item_price: '4.99',
    item_qty: 1,
    item_qty_measurement: 'oz',
  },
  {
    id: 3,
    item_name: 'apple',
    item_category: 'fruit',
    item_price: '8.99',
    item_qty: 1,
    item_qty_measurement: 'lbs',
  },
  {
    id: 4,
    item_name: 'potato',
    item_category: 'vegetable',
    item_price: '3.99',
    item_qty: 1,
    item_qty_measurement: 'lbs',
  },
];

const Dashboard = () => {
  /* Unit 3 stuff */
  //   const dispatch = useDispatch();
  const { push } = useHistory();
  //   const user = useSelector(state => state);
  //   const LogOutButton = () => {
  //     localStorage.removeItem('token');
  //     push('/login');
  //   };

  const pushToAddItem = () => {
    push('/additem');
  };

  //   const pushToEditItem = () => {
  //     push('/edititem');
  //   };

  const onSubmit = () => {
    // pending
  };

  return (
    <div id="page-wrapper">
      <div className="landing is-preload">
        <section
          style={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              display: 'inline-block',
              fontSize: '1.75em',
              opacity: '1',
              padding: '0.35em 1em',
              position: 'relative',
              textTransform: 'uppercase',
            }}
          >
            African Marketplace
          </h2>
          <form onSubmit={onSubmit}>
            <div
              className="inner"
              style={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'space-between',
              }}
            >
              {dummyData.map(item => {
                return <Card key={item.id} {...item} />;
              })}
              {/* <button className="log-out" onClick={  LogOut } > Log Out </button> */}
            </div>
          </form>
          <button className="add-item button primary" onClick={pushToAddItem}>
            Add Item
          </button>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
