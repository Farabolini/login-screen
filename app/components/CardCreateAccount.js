import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const CardCreateAccount = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");
    const[username, setUsername] = useState("");
    const[birthDate, setBirthDate] = useState("");
    const[accountCreatedSuccess, setAccountCreatedSuccess] = useState(false);

    function validateForm() {
        return (email.length > 0 && password.length > 0 && name.length > 0 && username.length > 0) && birthDate.length > 0;
    }

    async function onSubmit(e) {

        e.preventDefault();
        const data = {
            name: name,
            email: email,
            username: username,
            password: password,
            birthDate: birthDate
            };

        }

    return (
      <div>
          <Form onSubmit={onSubmit}>

          <Form.Group size="lg" controlId="name">
                    <Col>
                    <Form.Control
                        placeholder="Name"
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </Col>
                </Form.Group>

                <Form.Group size="lg" controlId="surname">
                    <Col>
                    <Form.Control
                        placeholder="Username"
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </Col>
                </Form.Group>

           <Form.Group size="lg" controlId="email">
                    <Col>
                    <Form.Control
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </Col>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Col>
                    <Form.Control
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     </Col>
                </Form.Group>

                <Form.Group size="lg" controlId="birthDate">
                    <Col>
                    <Form.Control
                        placeholder="Birth date (YYYY/MM/DD)"
                        type="text"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                     />
                     </Col>
                </Form.Group>

                <Col>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Create Account!
                </Button>
                </Col>

            </Form>
      </div>  
    );

}

export default CardCreateAccount;
