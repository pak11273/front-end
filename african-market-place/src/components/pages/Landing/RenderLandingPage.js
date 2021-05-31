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
              A project built with the PERN Stack
              <br />5 dedicated software engineers
            </h2>
            <p>
              My role was to design and implement the layouts and styles for
              this project. Upon completion I further enhanced the app and
              improved the architecture. and
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
            <h2>Redux state management</h2>
            <p>
              We used redux to handle global state. Redux thunks was used for
              asynchronous calls.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic2} alt="" />
          </div>
          <div className="content">
            <h2>SASS</h2>
            <p>
              The styling was mostly SASS preprocessing and we integrated
              several libraries to get UI parts working together.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <div className="content">
            <h2>Challenges</h2>
            <p>
              We held daily standups and helped out where bottlenecks occurred.
            </p>
          </div>
        </section>
      </section>

      <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major">
            <h2>Our Tech Stack</h2>
            <p>
              This is the tech stack we used
              <br />
              We spent several days of planning and decided to use the best
              tools
            </p>
          </header>
          <ul className="features">
            <li className="icon fa-paper-plane">
              <h3>React</h3>
              <p>
                For our front-end we used React. It's fast and easy to prototype
                web applications.
              </p>
            </li>
            <li className="icon solid fa-laptop">
              <h3>Redux</h3>
              <p>We wanted a state manager that could scale out.</p>
            </li>
            <li className="icon solid fa-code">
              <h3>Express</h3>
              <p>
                We used Node Express so that we could have the power of async
                functions.
              </p>
            </li>
            <li className="icon solid fa-headphones-alt">
              <h3>Postgres SQL</h3>
              <p>Our database needed to be very performant.</p>
            </li>
            <li className="icon fa-heart">
              <h3>Knex</h3>
              <p>
                We wanted a simple yet powerful ORM to handle our sql queries.
                Knex gave us the freedom to change our schema effortlessly while
                still giving us the option to build raw SQL queries.
              </p>
            </li>
            <li className="icon fa-flag">
              <h3>SASS</h3>
              <p>For the UI we chose an old favorite.</p>
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
