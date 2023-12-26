import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Logins from './Logins.js';
import reportWebVitals from './reportWebVitals';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home.js';
import About from './about.js';
import Service from './service.js';
import Contact from './contact.js';
import Profile from './Profile.js';
import Form from './Form.js';
import Order from './Order.js';
import { Container, Row, Col } from 'bootstrap';




const root = ReactDOM.createRoot(document.getElementById('root'));
const name="sandhiya";
const contact_detail=[{
  Phone_number: "9150148910",
  email: "sandhiya28012002@gmail.com" ,
  address: "No.10/6 Gandhi Salai Lane,Nanganallur,Chennai-600 114." 
}
]
const std_name=[
{name: "sandhiya",
Phone_number:"9150148910",Email: "sandhiya28012002@gmail.com"},
{name: "haripriya",Phone_number:"9545254525",Email: "hari0708@gmail.com"},
{name: "suryakala",Phone_number:"8888899998",Email: "suryakala1008@gmail.com"},
{name: "yuvashree",Phone_number:"9876654321",Email: "yuvashree1412@gmail.com"},
{name: "abirami",Phone_number:"1234567891",Email: "abirami1409@gmail.com"},
{name:"karthika",Phone_number:"9150148910",Email: "karthika2709@gmail.com"}
]

root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/service' element={<Service />} />
    <Route path='/contact' element={<Contact name={contact_detail} friends={std_name}/>} />
    <Route path='/Profile' element={<Profile userName={name}/>} />
    <Route path='/Form' element={<Form />} />
    <Route path='/Order' element={<Order />} />


    


    <Route path='/logins' element={<Logins/>} />
</Routes>
  
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
