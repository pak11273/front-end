import { Card } from '../../common/Card';
import React from 'react';
import { useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import axiosWithAuth from '../../../utils/axiosWithAuth';
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
    item_name: 'jalapeno',
    item_category: 'vegetable',
    item_price: '2.99',
    item_qty: 1,
    item_qty_measurement: 'oz',
  },
];

const Dashboard = () => {
  /* Unit 3 stuff */
  const { push } = useHistory();
  // const user = useSelector(state => state);
  const LogOutButton = () => {
    localStorage.removeItem('token');
    push('/login');
  };

  const pushToAddItem = () => {
    push('/additem');
  };

  const pushToEditItem = () => {
    push('/edititem');
  };

  const pushToMarketplace =() =>{
    push('/marketplace');
  };
  const onSubmit = () => {
    // pending
  };
  //   const pushToDeleteItem = (id) => {
  //     //add axios call
  //     axiosWithAuth()
  //     .delete(`https://african-marketplace-tt14.herokuapp.com/${id}`)
  //     .then((res) =>{
  //         console.log(res);
  //         dispatch(deleteItem(id));
  //     })
  //     .catch((err) => {
  //         console.log(err);
  //     })
  // };
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
        </section>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button className="add-item" onClick={pushToAddItem}>
          Add Item
        </button>
        
        <button onClick = {pushToMarketplace}>Go to Marketplace</button>
      </div>
      <br/>
      <div style={{ textAlign: 'center' }}>
      <button  className="log-out" onClick = {LogOutButton}>Log Out</button>
    </div>
    </div>
  );
};

export default Dashboard;
