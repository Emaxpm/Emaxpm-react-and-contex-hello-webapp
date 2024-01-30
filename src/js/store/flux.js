import { isRouteErrorResponse } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			formData: {},
			currentEdit: {},
			contact: []
		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Ema")
					if (response.ok) {
						const data = await response.json();
						let store = getStore();
						setStore({ ...store, contacts: data });
						console.log(data)
					}
				}

				catch (error) {
					console.log("Algo salio mal", (error));
				}
			},
			addContact: async (data) => {
				const actions = getActions();
				try {

					const response = await fetch("https://playground.4geeks.com/apis/fake/contact", {
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "application/json"
						}

					})

					console.log("respueta", response)

					if (response.ok) {
						actions.getContacts();
					}
				}
				catch (error) {

					console.log("aca esta el error", error)

				}
			},

			editContact: async (body, id) => {
				try {

					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "PUT",
						body: JSON.stringify(body),
						headers: {
							"Content-Type": "application/json"
						}
					})
					if (!response.ok) {
						throw new Error("no se pudo actualizar")
					}

					const data = await response.json()
					console.log(data);
					const actions = getActions()
					await actions.getContacts()

				}
				catch (error) {
					console.error(error)
				}
			},

			setCurrentEdit: (obj) => {
				let store = getStore();
				setStore({ ...store, currentEdit: obj });
			},

			deleteContact: async (idContact) => {
				try {

					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${idContact}`, {
						method: "DELETE"
					})
					if (!response.ok) {
						throw new Error("no se pudo eliminar")
					}

					const data = await response.json()
					console.log("el contacto se elimino correctamente", data)
					const actions = getActions()
					await actions.getContacts()

				}
				catch (error) {
					console.log(error)
				}
			}
		}

	};
};

export default getState;
