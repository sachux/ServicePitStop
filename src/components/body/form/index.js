import React, { useState } from 'react';
import axios from "axios";
import "./form.css";


function CreateForm() {

  const [brand, setBrandValue] = useState('');
  const [product, setProductValue] = useState('');
  const [type, setTypeValue] = useState('');
  const [title, setTitleValue] = useState('');
  const [description, setDescValue] = useState('');
  const [priority, setPriorityValue] = useState('');
  const [name, setNameValue] = useState('');


  const handlebrandChange = (event) => {
    setBrandValue(event.target.value);
  };

  const handleproductChange = (event) => {
    setProductValue(event.target.value);
  };

  const handletypeChange = (event) => {
    setTypeValue(event.target.value);
  };

  const handletitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handledescriptionChange = (event) => {
    setDescValue(event.target.value);
  };

  const handlepriorityChange = (event) => {
    setPriorityValue(event.target.value);
  };

  const handlenameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleSubmit = (event) => {
    const payload = {
      "serviceId": "1005",
      "title": title,
      "description": description,
      "type": type,
      "priority": priority,
      "brand": brand,
      "product": product,
      "userdetails": ""
    }

    createRequest(payload);
  };

  const createRequest = (request) => {
    console.log(JSON.stringify(request))
    axios.post('https://jakxwpcp84.execute-api.eu-north-1.amazonaws.com/prod/product', request).then(() => {
      window.location.reload(false);
    })
  }

  return (
    <>
      <h2> Create Request </h2>

      <div className='formContainer'>     
         <form>

          <p>Product Details</p>
          <hr></hr>
        <label>
          Brand:</label>
        <input type="text" value={brand} onChange={handlebrandChange} />

        <br />

        <label>
          Product:</label>
        <input type="text" value={product} onChange={handleproductChange} />

        <br />
        <br />


        <p>Issue/Request Details</p>
          <hr></hr>
        <label>
          Type:</label>
        <input type="text" value={type} onChange={handletypeChange} />


        <br />


        <label>
          Title:</label>
        <input type="text" value={title} onChange={handletitleChange} />

        <br />


        <label>
          Description:</label>
        <input type="text" value={description} onChange={handledescriptionChange} />

        <br />

        <label>
          Priority:
        </label>

        <input type="text" value={priority} onChange={handlepriorityChange} />

        <br />
        <br />

        <p>User Details</p>
          <hr></hr>

          <label>
          Name and Address:
        </label>

        <textarea type="text" value={name} onChange={handlenameChange} />

        <br />
      </form>

      <input type="submit" value="Submit" onClick={handleSubmit} />

      </div>

    </>
  )
}

export default CreateForm;