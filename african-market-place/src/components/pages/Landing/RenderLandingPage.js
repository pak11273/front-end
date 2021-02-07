import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import React from 'react';
import pic1 from 'src/assets/images/pic01.jpeg';
import pic2 from 'src/assets/images/pic02.jpeg';
import pic3 from 'src/assets/images/pic03.jpeg';

function RenderLandingPage(props) {
  return (
    <>
      <section id="banner">
        <div className="inner">
          <h2>African Marketplace</h2>
          <p>
            Sauti Africa empowers small business owners, particularly women,
            <br />
            to improve their business and economic opportunities
            <br />
            to grow out of poverty.
          </p>
          {/* <ul className="actions special">
            <li>
              <a href="#" className="button primary">
                Activate
              </a>
            </li>
          </ul> */}
        </div>
        <a href="#one" className="more scrolly">
          Learn More
        </a>
      </section>

      <section id="one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>
              Arcu aliquet vel lobortis ata nisl
              <br />
              eget augue amet aliquet nisl cep donec
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
              eleifend
              <br />
              fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
              ullamcorper.
            </p>
          </header>
          <ul className="icons major">
            <li>
              <span className="icon fa-gem major style1">
                <span className="label">Lorem</span>
              </span>
            </li>
            <li>
              <span className="icon fa-heart major style2">
                <span className="label">Ipsum</span>
              </span>
            </li>
            <li>
              <span className="icon solid fa-code major style3">
                <span className="label">Dolor</span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id="two" className="wrapper alt style2">
        <section className="spotlight">
          <div className="image">
            <img src={pic1} alt="" />
          </div>
          <div className="content">
            <h2>
              Magna primis lobortis
              <br />
              sed ullamcorper
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
              imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic2} alt="" />
          </div>
          <div className="content">
            <h2>
              Tortor dolore feugiat
              <br />
              elementum magna
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
              imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <div className="content">
            <h2>
              Augue eleifend aliquet
              <br />
              sed condimentum
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
              imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </section>
      </section>

      <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major">
            <h2>Accumsan mus tortor nunc aliquet</h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
              eleifend
              <br />
              fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
              ullamcorper.
            </p>
          </header>
          <ul className="features">
            <li className="icon fa-paper-plane">
              <h3>Arcu accumsan</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
              </p>
            </li>
            <li className="icon solid fa-laptop">
              <h3>Ac Augue Eget</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
              </p>
            </li>
            <li className="icon solid fa-code">
              <h3>Mus Scelerisque</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
              </p>
            </li>
            <li className="icon solid fa-headphones-alt">
              <h3>Mauris Imperdiet</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
              </p>
            </li>
            <li className="icon fa-heart">
              <h3>Aenean Primis</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
              </p>
            </li>
            <li className="icon fa-flag">
              <h3>Tortor Ut</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="cta" className="wrapper style4">
        <div className="inner">
          <header>
            <h2>Registration</h2>
            <p>
              Registration is Free. Sign up to visit The Market where you can
              display your products and see what other businesses are offering.
            </p>
          </header>
          <ul className="actions stacked">
            <li>
              <Link className="button fit primary" to="/signup">
                Sign Up
              </Link>
            </li>
            <li>
              <a href="#" className="button fit">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default RenderLandingPage;
