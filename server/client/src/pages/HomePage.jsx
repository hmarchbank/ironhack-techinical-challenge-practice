import logo from "../logo.svg";
import "../App.css";
import axios from 'axios'
import { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"
import '../components/Loading'
import LoadingComponent from "../components/Loading";
import './homepage.css'

function HomePage() {

  const [phones, setPhones] = useState([])

  useEffect( () => {
    getPhones()
  }, [])
  
  
  const getPhones = (() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/phones/`)
      .then((phones)=>{
        console.log(phones)
        setPhones(phones.data)
      })
  })
  
  return (
    <div className="homepage">
      <h1>The Phone Cave</h1>
      {phones.length ?
      <div className="phones">
        {phones.map((phone) => {
          return(
          <>
          <div className="phone-box">
            <div>
              <h3>{phone.name}</h3>
              <NavLink to={`/phones/${phone.id}`}>More Details</NavLink> 
            </div>
          <img class="phone-image"src={`${process.env.REACT_APP_SERVER_URL}/${phone.imageFileName}`} />
          </div>
          </>
          )
        })}
      </div>
      : <LoadingComponent/> }
    </div>
  );
}

export default HomePage;
