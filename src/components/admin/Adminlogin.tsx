import React from "react";
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input, Toast, ToastBody, ToastHeader } from "reactstrap";

const Example = () => {
  console.log("here");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedin, setLoggedin] = React.useState(false);

  const loginHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!username || !password) {
      return;
    }

    // email: "eve.holt@reqres.in",
    // password: "cityslicka"
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("RESPONSE from login success ", data);
        setLoggedin(true);
      });

    // console.log(username, password);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center">Welcome to Search Engine!</h1>
      <h4 className="text-center">Admin Login</h4>
      <Row>
        <Col md={3} className="mx-auto">
          <Card>
            <CardBody>
              <Form onSubmit={loginHandler}>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">
                    Email
                  </Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" onChange={(ev) => setUsername(ev.currentTarget.value)} />
                </FormGroup>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="examplePassword" className="mr-sm-2">
                    Password
                  </Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" onChange={(ev) => setPassword(ev.currentTarget.value)} />
                </FormGroup>
                <Button type="submit" color="primary">
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
          {isLoggedin && (
            <Card className="mt-5">
              <CardBody>
                <>
                  <div>User is logged in on the system.</div>
                  <div className="p-3 bg-success my-2 rounded">
                    <Toast>
                      <ToastHeader>Reactstrap</ToastHeader>
                      <ToastBody>This is a toast on a success background — check it out!</ToastBody>
                    </Toast>
                  </div>
                </>
              </CardBody>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
