import React, { useState } from 'react';

const NewBoardForm = ({ addNewBoard }) => {
    const INITIAL_STATE = {
        name: '',
    };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name !== ''){
        addNewBoard(formData.name);
        setFormData(INITIAL_STATE);
    } else {
        alert("cannot be empty");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoFocus
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewBoardForm;

