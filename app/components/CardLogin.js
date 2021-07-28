import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function FormLogin() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[loginSuccess, setLoginSuccess] = useState(false);

    function validateForm() {
        return username.length > 0 && password.length > 0;
    };

    async function onSubmit(e) {
       
        e.preventDefault();
        const data = {
            username: username,
            password: password
            };

        }

        return (
        <div>
            <Form onSubmit={onSubmit}>

                <Form.Group size="lg" controlId="username">
                    <Col>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </Col>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Col>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     </Col>
                </Form.Group>

                <Col>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                </Col>

            </Form>
        </div>
    );
    }




