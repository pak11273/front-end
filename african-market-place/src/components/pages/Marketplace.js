import React, { useEffect, useState } from 'react';

import { Card } from 'src/components/common/Card';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { pics } from 'src/assets/files/card_pics.js';
import { useHistory } from 'react-router-dom';

function Marketplace() {
  const [list, setList] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get('https://african-marketplace-tt14.herokuapp.com/api/items')
      .then(res => {
        setList(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const pushToDash = () => {
    push('/dashboard');
  };

  return (
    <article id="main">
      <header>
        <h2>The Market</h2>
        <p>
          The Market is an area where small business owners can trade and market
          their products. They can also see what their competitors offer and
          gain other insights to help their business grow.
        </p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Business Owners</h3>
          <p>Register your products and get them listed here</p>
          <button style={{ marginBottom: '20px' }} onClick={pushToDash}>
            My Products
          </button>
        </div>
      </section>
      <section
        style={{ display: 'flex', flexFlow: 'row wrap', margin: '3rem' }}
      >
        {list.map(item => {
          let url = pics.filter(pic => {
            return pic.name === item.item_name;
          });

          let emptyImg =
            'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';

          return (
            <Card
              key={item.id}
              item_picUrl={(url[0] && url[0].src) || emptyImg}
              item_name={item.item_name}
              item_price={item.item_price}
              item_qty={item.item_qty}
              item_qty_measurement={item.item_qty_measurement}
              item_category={item.item_category}
            />
          );
        })}
      </section>
    </article>
  );
}
export default Marketplace;
