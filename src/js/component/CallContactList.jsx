import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext";
import { Await, Link, useNavigate } from "react-router-dom";
import style from './CallContactList.module.css';

const CallContactList = () => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate()

  console.log(store.contacts);
  useEffect(() => {
    actions.getContacts();
  }, [])

  const handlerEdit = async (contacts) => {
    navigate("/editContact", { state: { contacts } })
  }

  const handlerDelete = async (id) => {

    try {
      const updatedList = store.contacts.filter((contacts) => contacts.id !== id);
      store.contacts = updatedList;
      await actions.deleteContact(id);
    }
    catch (error) {
      console.log(error)
    }

  }

  return (

    <div className={style.body}>

      {store.contacts.map((item, index) => (

        <div key={index} className="card mb-3 mx-auto" style={{ maxWidth: "800px" }}>

          <div className="row g-0">
            <div className="col-md-3">
              <img src="https://img.freepik.com/premium-vector/3d-contact-changeable-icon-design_656236-34.jpg?w=2000" className={style.contactimg} alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.full_name}</h5>
                <p className="card-text"><i className="fa-solid fa-location-dot px-2"></i> {item.address}</p>
                <p className="card-text"><i className="fa-solid fa-phone px-2 "></i> {item.phone}</p>
                <p className="card-text"><i className="fa-solid fa-envelope px-2"></i>{item.email}</p>
              </div>
            </div>

            <div className='col-md-1 icons'>

              <i className="fa-solid fa-pencil" onClick={() => handlerEdit(item, item.id)} style={{ padding: "10px" }}></i>
              <i className="fa-solid fa-trash" onClick={() => handlerDelete(item.id)} style={{ color: "#ff3333" }}></i>

            </div>

          </div>

        </div>

      ))}

      <div className={style.butonsc}>

        <Link to="/demo">

          <i className="fa-regular fa-circle-left fa-2xl" style={{ color: "#3cadc3" }}></i>

        </Link>

        <Link to="/">

          <button className="btn btn-primary">Back home</button>

        </Link>

      </div>

    </div>
  )
}

export default CallContactList