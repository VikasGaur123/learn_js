import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import ShowBesides from './ShowBesides';
import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/base/TextareaAutosize';



function FormValidation() {
  const [inputValues, setInputValue] = useState({
    name: "",
    email: "",
    number: "",
    meassage: "",
  });
  
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    number: "",
    meassage: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log('name=', name, 'value', value);
    // console.log(value,'value');
    setInputValue({ ...inputValues, [name]: value });
    //checkValidation();
  };


  function handleSubmit(event) {
    event.preventDefault();
  };
  const checkValidation = () => {
    let errors = validation;

    //console.log("event",inputValues.email);
    //  let Name=inputValues.name;
    let Email = inputValues.email;
    let Meassage = inputValues.meassage;
    let PhoneNo = inputValues.number;

    // let phoneNoChack = /^\(?(\d{3})\)?[-]?(\d{3})[- ]?(\d{4})$/;
    //let phoneNoChack =/^\d{10}$/;

    let EmailValidChack = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    if (inputValues.name.length != 0 && inputValues.name.length >= 5) {
      // document.getElementById('Name').innerHTML='';
      errors.name = "";
    }
    else {
      // document.getElementById('Name').innerHTML='Enter valid Name';
      errors.name = "Enter valid Name";
    }
    if (PhoneNo.length>=10) {
      // document.getElementById('PhoneNo').innerHTML = '';
      errors.number = "";

    } else {
      // document.getElementById('PhoneNo').innerHTML = 'Enter valid phone';
      errors.number = "Enter valid phone";
    }
    if (Email.trim() && EmailValidChack.test(Email)) {
      // document.getElementById('Email').innerHTML='';
      errors.email = "";
    } else {
      // document.getElementById('Email').innerHTML='Enter Valid Email';
      errors.email = "Email is required";
    }
    if (Meassage.length < 15 || Meassage == '') {
      // document.getElementById('Meassage').innerHTML='Enter Valid Meassage';
      errors.meassage = "Enter valid meassage";
    } else {
      // document.getElementById('Meassage').innerHTML='';
      errors.meassage = "";
    }
    setValidation(errors);
  }
  useEffect(() => {
    checkValidation();
  }, [inputValues]);


  return (
    <>
      <h1>Form </h1>
      <form
        onSubmit={(event) => handleSubmit(event)}
      >
        <label>
          Name:
          <Input type="text" name="name"
            onChange={(event) => handleChange(event)}
            value={inputValues.name}
            />
        </label><b>
          { <span style={{color: 'red'}}>{validation.name}</span>}
        </b><br /><br />
        <label>
          Email:
          <Input type="email"
            name="email"
            onChange={(event) => handleChange(event)}
            value={inputValues.email}
          />
        </label><b>
          {/* <span id="Email"> </span> */}
          {<span style={{color: 'red'}}>{validation.email}</span>}
        </b><br /><br />
        <label>
          Phone Number:
          <Input type="number"
            name='number'
            onChange={(event) => handleChange(event)}
            value={inputValues.number}
          />
        </label><b>
          {/* <span id="PhoneNo"> </span> */}
          {<span style={{color: 'red'}}>{validation.number}</span>}
          </b><br /><br />
        <label>
          Meassage:
          <TextareaAutosize
            name='meassage'
            onChange={(event) => handleChange(event)}
            value={inputValues.meassage}
          />
        </label><b>
          {/* <span id="Meassage"> </span> */}

          {<span style={{color: 'red'}}>{validation.meassage}</span>}
        </b><br /><br />
        <button type="submit" value="Submit">Submit</button>
      </form>
      <br /><br />
      <ShowBesides
        inputValues={inputValues}
      />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FormValidation />
  </>
);