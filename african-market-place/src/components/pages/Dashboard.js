import React from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function UserDashboard(){
    const { push } = useHistory();
  
  const logOutButton = () => {
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

    const pushToDeleteItem = (id) => {
      //add axios call
      axiosWithAuth()
      .delete()
      .then((res) =>{
          console.log(res);
      })
      .catch((err) => {
          console.log(err);
      });
    };

    return(
        <div style = {{textAlign: 'center'}}>
            <div>
                <h2>Your Listings</h2>
                {/* map of users items from API call */}
                <div>
                <p> Name: Apple| Price: .99| Category: Fruit
                | 1lbs 
                <button onClick = {pushToEditItem}>Edit Listing </button>
                <button onCLick = {pushToDeleteItem}>Delete Listing</button>
                </p></div>
                {/* buttons will be connected to the map */}
            </div>
            <button onClick = {pushToMarketplace}> ⇦ Marketplace</button>
            <button onClick = {logOutButton}>Log Out</button>
        </div>
    );
};
export default UserDashboard;