import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { useHistory } from 'react-router-dom';

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

  const pushToEditItem = () => {
    push('/edititem');
  };

  const onSubmit = () => {
    // pending
  };

  //   const pushToDeleteItem = id => {
  //     //add axios call
  //     axiosWithAuth()
  //       .delete(`https://african-marketplace-tt14.herokuapp.com/${id}`)
  //       .then(res => {
  //         console.log(res);
  //         dispatch(deleteItem(id));
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };

  return (
    <div id="page-wrapper">
      <div className="landing is-preload">
        <section
          style={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <form onSubmit={onSubmit}>
            <div className="inner">
              <h1>African Marketplace</h1>
              <button className="add-item" onClick={pushToAddItem}>
                Add Item
              </button>
              <button className="edit-item" onClick={pushToEditItem}>
                Edit Item
              </button>
              {/* <button
        className="delete-item"
        onClick={() => deleteItemFunction(ele.id)}
      >
        Delete Item
      </button> */}
              {/* <button className="log-out" onClick={  LogOut } > Log Out </button> */}
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
