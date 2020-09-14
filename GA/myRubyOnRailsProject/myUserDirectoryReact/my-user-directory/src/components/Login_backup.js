import React, { useState } from "react";

function Login(props) {
  const [formData, setFormData] = useState({});

  const updateData = (e) => {
    const name = e.currentTarget.name;
    const target = e.currentTarget;

    const value = target.type === "checkbox" ? target.checked : target.value;
    let obj = { ...formData };
    obj[name] = value;
    setFormData(obj);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("logging form data ", formData);
    Login(formData)
      .then((result) => {})
      .catch((e) => {
        console.log("error logging ", e);
      });
  };

  return (
    <React.Fragment>
      <h1>Login route works</h1>
    </React.Fragment>
  );
}

export default Login;
