import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="conNavb">
			<div className="navb">

				<Link to="/">
					<img src="https://images.unsplash.com/photo-1632395627727-3b97d0724814?auto=format&fit=crop&q=80&w=2680&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo de la pagina" className="logo"></img>
				</Link>

				<h1 className="titlenavb">Contact List</h1>

			</div>

			<div className="links">

				<ul className="listnavb">

					<li className="nitem">
						<p>About us</p>
					</li>

					<li className="nitem">
						<p>Contact</p>
					</li>

					<li>
						<div className="dropdown">

							<button className="btn text-info bg-dark" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" >
								<i className="fa-solid fa-gear"></i>
							</button>
							<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
								<li><a className="dropdown-item active" href="#">Acount</a></li>
								<li><a className="dropdown-item" href="#">Notifications</a></li>
								<li><a className="dropdown-item" href="#">Settings</a></li>
								<li><hr className="dropdown-divider" /></li>
								<li><a className="dropdown-item" href="#">Log out</a></li>
							</ul>

						</div>
					</li>


				</ul>

			</div>

		</nav>
	);
};
