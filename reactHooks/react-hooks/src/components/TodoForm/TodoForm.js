import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [ value, setValue ] = useState("");

  // get keyword in search bar
  function handleSearch(event) {
    
    setValue(event.target.value);
  }

  //   send data to app on sumit
  function handleSubmit(event) {
    event.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      title: value,
    };
    onSubmit(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        placeholder="insert keywords"
        value={value}
        name="search"
        onChange={handleSearch}
      ></input>
    </form>
  );
}

export default TodoForm;
