import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email} , Here is what I want to say ${data.message}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <Form onSubmit={formSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone </Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="mobile number"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                />
              </Form.Group>
              <Button variant="outline-primary" type="submit">
                Submit form
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
