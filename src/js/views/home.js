import React from "react";
import { Form, Link } from "react-router-dom";
import "../../styles/home.css"
import Footer from "../component/Footer.jsx";

export const Home = () => (

  <div className="text-center mt-5">

    <h1 className="title">Welcome to contac list site</h1>

    <div className="content">

      <div className="left">

        <p className="phara-h">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ex quo. Obcaecati cupiditate numquam minima delectus adipisci, officia atque. Eius.sit amet consectetur adipisicing elit. Sed mollitia quasi, ea voluptates necessitatibus dolores nulla! Nam explicabo et asperiores.</p>

        <Link to="/demo">

          <button className="btn btn-primary buto-h">Have fun with our site</button>

        </Link>

      </div>

      <div className="right">

        <img src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-h" alt="imagen de un celular"></img>


      </div>

    </div>

    <Footer />

  </div>
);
