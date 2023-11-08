import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    heading: '',
    date: '',
    month: '',
    day: '',
    time: '',
    address: '',
  });
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  
  const handleSubmit = (e) => {
  const formDataToSend = new FormData();

    formDataToSend.append('heading', formData.heading);
    formDataToSend.append('date', formData.date);
    formDataToSend.append('month', formData.month);
    formDataToSend.append('day', formData.day);
    formDataToSend.append('time', formData.time);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('file',file);
    // console.log(formDataToSend)
    e.preventDefault();

  

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/event',
        // headers: { 
        //   ...formDataToSend.getHeaders()
        // },
        data : formData
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          heading
          <input
            type="text"
            name="heading"
            value={formData.field1}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          date
          <input
            type="number"
            name="date"
            value={formData.field2}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
         month
          <input
            type="text"
            name="month"
            value={formData.field3}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          day
          <input
            type="text"
            name="day"
            value={formData.field4}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          time
          <input
            type="text"
            name="time"
            value={formData.field5}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          address
          <input
            type="text"
            name="address"
            value={formData.field6}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Upload File:
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
