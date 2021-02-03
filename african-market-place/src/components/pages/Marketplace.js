import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function Marketplace() {
    const [list, setList] = useState([]);
    const {push} = useHistory();

    useEffect(() => {
        axiosWithAuth()
         .get('https://african-marketplace-tt14.herokuapp.com/api/items')
         .then(res => {
             setList(res.data);
         })
         .catch(error => {
             console.log(error);
         });
    },[]);

    const pushToDash = () => {
        push('/dashboard');
    };
    
    return(
        <div style={{ textAlign: 'center' }}>
            <h2>Marketplace Items</h2>
            <button style={{marginBottom: '20px'}} onClick = {pushToDash}
            >Profile</button>
            {list.map((item) =>{
                return (<p key = {item.id} style={{ border: '1px solid white'}}>
                    Name: {item.item_name}| Price: {item.item_price}| Category: {item.item_category}</p>);
                
            })};
        
        </div>
    );
};
export default Marketplace;