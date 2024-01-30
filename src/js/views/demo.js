import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {

	const { store, actions } = useContext(Context);

	return (

		<div>

			<div className="containerd">

				<div className="card text-center" style={{ width: "18rem" }}>
					<img src="https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-tablero-clip-papel-lapiz-concepto-icono-objeto-educacion-aislado-estilo-dibujos-animados-plana_138676-2152.jpg" className="" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Do you need more contacts?</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Link to="/AddNewContact">

							<button className="btn btn-primary" >
								Add new contact
							</button>

						</Link>
					</div>
				</div>

				<div className="card text-center" style={{ width: "18rem" }}>
					<img src="https://cdn-icons-png.flaticon.com/512/4920/4920483.png" className="mt-3" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Your contact list</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Link to="/ContactList">

							<button className="btn btn-primary" >
								See your contacts
							</button>

						</Link>
					</div>
				</div>

			</div>

			<Link to="/">

				<i className="fa-solid fa-person-walking-arrow-loop-left fa-2xl men" style={{ color: "#fff" }}></i>

			</Link>

		</div>
	);
};