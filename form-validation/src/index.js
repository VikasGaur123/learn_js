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
    // console.log(event, "eventttt");
    const { name, value } = event.target;
    //console.log('name=', name, 'value', value);
    // console.log(value,'value');
    // checkValidation();
    setInputValue({ ...inputValues, [name]: value });
  };
  console.log(inputValues, "input");

  function handleSubmit(event) {
    event.preventDefault();
  };
  const checkValidation = () => {
    let errors = validation;
    console.log(errors, 'errors');
    console.log("chala hai");
    //console.log("event",inputValues.email);
    //  let Name=inputValues.name;
    let Email = inputValues.email;
    let Meassage = inputValues.meassage;
    let PhoneNo = inputValues.number;

    if (inputValues.name.length != 0 && inputValues.name.length >= 5) {
      // document.getElementById('Name').innerHTML='';
      errors.name = "";
      // setValidation({ ...validation, name:"" });
    }
    else {
      // document.getElementById('Name').innerHTML='Enter valid Name';
      errors.name = "Enter valid Name";
      // setValidation({ ...validation, name:"Enter valid Name" });
    }
    if (PhoneNo.length>= 9) {
      // document.getElementById('PhoneNo').innerHTML = '';
      //console.log('PhoneNo_len', PhoneNo.length);
      errors.number = "";
    } else {
      // document.getElementById('PhoneNo').innerHTML = 'Enter valid phone';
      errors.number = "Enter valid phone";
    }

    let at = Email.indexOf('@');
    let dot = Email.lastIndexOf('.');
    if (at < 1 || dot - at < 3 || dot >= Email.length - 2) {
      errors.email = "Email is required";
    } else {
      errors.email = "";
    }
    // if (Email.trim() && EmailValidChack.test(Email)) {
    //   // document.getElementById('Email').innerHTML='';
    //   errors.email = "";
    // } else {
    //   // document.getElementById('Email').innerHTML='Enter Valid Email';
    //   errors.email = "Email is required";
    // }
    if (Meassage.length < 15 || Meassage == '') {
      // document.getElementById('Meassage').innerHTML='Enter Valid Meassage';
      errors.meassage = "Enter valid meassage";
    } else {
      // document.getElementById('Meassage').innerHTML='';
      errors.meassage = "";
    }
    setValidation(errors);
    console.log(validation, "val State");
  }
  useEffect(() => {
     checkValidation();
  }, [inputValues]);

  console.log("validation-----name:=", validation.name)
  return (
    <>
      <h1>Form </h1>
      <form
        onSubmit={(event) => handleSubmit(event)}
      >
        <label>
          Name:
          <Input type="text" name="name"
            onChange={(event) => { handleChange(event); console.log("name=", validation.name, "return ke andder errname") }}
            value={inputValues.name}
          />
        </label><b>
          {<span style={{ color: 'red' }}>{validation.name}</span>}
        </b><br /><br />
        <label>
          Email:
          <Input type="email"
            name="email"
            onChange={(event) => handleChange(event)}
            value={inputValues.email}
          />
        </label><b>
          {<span style={{ color: 'red' }}>{validation.email}</span>}
        </b><br /><br />
        <label>
          Phone Number:
          <Input type="number"
            name='number'
            onChange={(event) => handleChange(event)}
            value={inputValues.number}
          />
        </label><b>
          {<span style={{ color: 'red' }}>{validation.number}</span>}
        </b><br /><br />
        <label>
          Meassage:
          <TextareaAutosize
            name='meassage'
            onChange={(event) => handleChange(event)}
            value={inputValues.meassage}
          />
        </label><b>
          {<span style={{ color: 'red' }}>{validation.meassage}</span>}
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