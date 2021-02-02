import React from 'react';
import { useSelector, useDispatch } from react-redux;
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { push } = useHistory();
    const user = useSelector((state) => state);
    const LogOutButton = () => {
        localStorage.removeItem("token");
        push('/login');
    }
}
const pushToAddItem = () => {
    push("/additem");
}
const pushToEditItem = () => {
    push("/edititem");
};

const pushToDeleteItem = (id) => {
    //add axios call
    axiosWithAuth()
    .delete(`https://african-marketplace-tt14.herokuapp.com/${id}`)
    .then((res) =>{
        console.log(res);
        dispatch(deleteItem(id));
    })
    .catch((err) => {
        console.log(err);
    })
}

return (
    <StyledNav>
    <h1>African Marketplace</h1>
    <button className='add-item' onClick={pushToAddItem}>Add Item</button>
    <button className='edit-item' onClick={pushToEditItem}>Edit Item</button>
    <button className='delete-item' onClick={() => deleteItemFunction(ele.id)}>Delete Item</button>
    <button className='log-out' onClick={(LogOut)}>Log Out</button>
    </StyledNav>
    


)

export default Dashboard;