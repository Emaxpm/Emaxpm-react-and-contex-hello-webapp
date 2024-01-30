import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import injectContext from "./store/appContext";
import  AddNewContact  from "./views/AddNewContact";
import  ContactList  from "./views/ContactList";

import { Navbar } from "./component/navbar";
import CallEditContact from "./views/CallEditContact";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/demo" element={<Demo />} />
						<Route exact path="/AddNewContact" element={<AddNewContact />} />
						<Route exact path="/ContactList" element={<ContactList />} />
						<Route exact path="/editContact" element={<CallEditContact />} />
						<Route exact path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
