import logo from "../logo.svg";
import "../App.css";
import axios from 'axios'
import { useState, useEffect } from "react";
import {useParams, NavLink} from "react-router-dom"
import LoadingComponent from '../components/Loading'
import './phone-details.css'



function PhoneDetails() {

  const [phone, setPhone] = useState('')
  const {phoneId} = useParams()

  useEffect( () => {
    getPhone()
  }, [])
  
  
  const getPhone = (() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/phones/${phoneId}`)
      .then((phone)=>{
        console.log(phone)
        setPhone(phone.data)
      })
  })
  
  return (
    <div className="phone-details-container">
      <h1>The Phone Cave</h1>
      {phone !== '' ?
        (<div className="phone-details">
          <div>
            <h3>{phone.name}</h3>
            <p>{phone.description}</p>
            <ul>
                <li><strong>Manufacturer: </strong>{phone.manufacturer}</li>
                <li><strong>Color: </strong>{phone.color}</li>
                <li><strong>Price: </strong>€{phone.price}</li>
                <li><strong>RAM: </strong>{phone.ram}</li>
                <li><strong>Screen: </strong>{phone.screen}</li>
            </ul>
            <NavLink to={`/`}>Return to Homepage</NavLink>
        </div>
        <img class="phone-details-image"src={`${process.env.REACT_APP_SERVER_URL}/${phone.imageFileName}`} />
        </div>
        )
      : <LoadingComponent/> }
    </div>
  );
}

export default PhoneDetails;