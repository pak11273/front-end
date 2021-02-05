import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
// import { deleteItem } from "../../utils/actions";
// import { useDispatch } from 'react-redux';

function UserDashboard(props){
  const [state , setState] = useState([]);
  const [message , setMessage ] = useState("");
    const { push } = useHistory();
    // const { dispatch } = useDispatch();
  
    const values = {
      user_id: props.user_id,
      item_id: props.item_id,
    };

    useEffect(() => {
      axiosWithAuth()
      .post("https://african-marketplace-tt14.herokuapp.com/api/userItems/addItems",values)
      .then(res => {
        //dispatch(addItem(res.data))
        // keeping state so code wont break
        //post would not work because a different endpoint is giving a 500 error so const values is undefined
        setState(res.data);
        console.log(state);
      })
      .catch(err => {
        console.log(err);
      });
      // eslint-disable-next-line
    },[]);
  
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

    const pushToDeleteItem = (item) => {
      //add axios call
      // console.log(state);
      // console.log(item);
      axiosWithAuth()
      .delete(`https://african-marketplace-tt14.herokuapp.com/api/userItems/${item.user_id}/list/${item.item_id}`)
      .then((res) =>{
          console.log(res);
          console.log(state);
          setMessage(res.data.message);
          //dispatch(deleteItem(res.data)); 
          //doesn't work because the only response recieved is a success message is recieved
          //cannot use our dispatch  and the server won't delete it
          
      })
      .catch((err) => {
          console.log(err);
      });
    };

    return(
        <div style = {{textAlign: 'center'}}>
            <div>
                <h2>Your Listings</h2>
                <button onClick = {pushToAddItem}>Add Listing</button>
                <br/>
                <div>
                 {state.map((item) => (
                   <p key={item.item_id}> Name: {item.item_name}| Price: {item.item_price}| Qty: {item.item_qty}{item.item_qty_measurement} 
                   <button onClick = {pushToEditItem}>Edit Listing </button>
                   <button onClick = {e => {e.stopPropagation(); pushToDeleteItem(item);}}>Delete Listing</button>
                   </p>
                 ))} 
               </div>
               <p>{message}</p>
            </div>
            <button onClick = {pushToMarketplace}> ⇦ Marketplace</button>
            <button onClick = {logOutButton}>Log Out</button>
        </div>
    );
};

// const mapStateToProps = (state) => {
//   return {
//   user_id: state.user_id,
//   items: state.items,
//   item_id: state.item_id,
//}
//};

// export default connect(mapStateToProps,{addItem,deleteItem})(UserDashboard)

export default UserDashboard;