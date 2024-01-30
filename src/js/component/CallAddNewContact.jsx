import React, { useState, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../../styles/AddNewContact.css"
import { Context } from '../store/appContext';

const CallAddNewContact = () => {
  const navigate = useNavigate()
  const { store, actions } = useContext(Context);

  const [data, setData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "Ema"
  })

  const handlerInput = (e) => {
    e.preventDefault();
    actions.addContact(data);
    navigate("/ContactList")
  }

  const info = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value
    })
  }

  return (

    <div>

      <div className="addContainer">

        <div className="mb-3">
          <label className="form-label">Full name:</label>
          <input type="text" className="form-control" name='full_name' onChange={info} value={data.full_name} id="formGroupExampleInput" placeholder="Full name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name='email' onChange={info} value={data.email} id="formGroupExampleInput2" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input type="number" className="form-control" name='phone' onChange={info} value={data.phone} id="formGroupExampleInput" placeholder="Enter phone" />
        </div>
        <div className="mb-3">
          <label className="form-label">Adress:</label>
          <input type="email" className="form-control" name='address' onChange={info} value={data.address} id="formGroupExampleInput2" placeholder="Enter address" />
        </div>

      </div>

      <div className="d-grid gap-2">
        <button className="btn btn-primary large-buttom" onClick={handlerInput} type="button">Save</button>
      </div>

      <div className="butons">

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

export default CallAddNewContact