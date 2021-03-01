import React, { useEffect, useState } from 'react';

import { Card } from '../common/Card';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { setItems } from 'src/state/actions/itemActions';
import { useHistory } from 'react-router-dom';

// import { deleteItem } from "../../utils/actions";
// import { useDispatch } from 'react-redux';

function UserDashboard(props) {
  const [message, setMessage] = useState('');
  const { push } = useHistory();
  // const { dispatch } = useDispatch();

  const values = {
    user_id: props.user_id,
    item_id: props.item_id,
  };

  useEffect(() => {
    axiosWithAuth()
      // prod: .get('https://african-marketplace-tt14.herokuapp.com/api/items')
      .get('http://localhost:5000/api/items')
      .then(res => {
        props.setItems(res.data);
      })
      .catch(error => {
        console.log('msg: ', error.response.data.message);
      });
  }, []);

  const pushToDash = () => {
    push('/dashboard');
  };

  const pushToAddItem = () => {
    push('/additem');
  };

  const pushToEditItem = () => {
    push('/edititem');
  };

  const pushToMarketplace = () => {
    push('/marketplace');
  };

  const pushToDeleteItem = item => {
    //add axios call
    // console.log(item);
    axiosWithAuth()
      .delete(
        `https://african-marketplace-tt14.herokuapp.com/api/userItems/${item.user_id}/list/${item.item_id}`
      )
      .then(res => {
        setMessage(res.data.message);
        //dispatch(deleteItem(res.data));
        //doesn't work because the only response recieved is a success message is recieved
        //cannot use our dispatch  and the server won't delete it
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <article id="main">
        <header>
          <h2>The Market</h2>
          <p>
            The Market is an area where small business owners can trade and
            market their products. They can also see what their competitors
            offer and gain other insights to help their business grow.
          </p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>Your Listings</h3>
            <p>Register your products and get them listed here</p>
            <button style={{ margin: '0 20px 0' }} onClick={pushToAddItem}>
              Add Listing
            </button>
            <button onClick={pushToMarketplace}> ⇦ Marketplace</button>
          </div>
        </section>
        <section
          style={{ display: 'flex', flexFlow: 'row wrap', margin: '3rem' }}
        >
          {props.ownerItems.map(item => (
            <Card
              key={item.item_id}
              item_name={item.item_name}
              item_picUrl={item.item_picUrl}
              item_category={item.item_category}
              item_price={item.item_price}
              item_qty={item.item_qty}
              item_qty_measurement={item.item_qty_measurement}
            />
          ))}
        </section>
        <p>{message}</p>
      </article>
    </>
  );
}

const mapStateToProps = ({ itemsReducer, userReducer }) => {
  return {
    ownerItems: itemsReducer.items.filter(
      item => item.owner_id === userReducer.userId
    ),
  };
};

export default connect(mapStateToProps, { setItems })(UserDashboard);
