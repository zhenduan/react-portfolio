import React, { Component } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap';




const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <Container className=" text-center">
                <h1 className="pt-4 ">Contact Me</h1>
                <div className="bottomLine"></div>
                <div className="contact py-2">
                    <p className="contactDetails"><i className="fas fa-envelope px-3"></i>duan2439@gmail.com</p>
                    <p className="contactDetails"><i className="fas fa-phone px-3"></i>0406 351 119</p>
                </div>
                <Row className="text-center py-5 justify-content-center">
                    <Col md={8} className="">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Control id="full-name" name="name" type="text" value={name} onChange={this.handleChange} placeholder="Full Name" />
                            </Form.Group>


                            <Form.Group>
                                <Form.Control id="email" name="email" type="email" value={email} onChange={this.handleChange} placeholder="Email" />
                            </Form.Group>


                            <Form.Group>
                                <Form.Control id="message" name="message" as="textarea" rows="5" value={message} onChange={this.handleChange} placeholder="Message" />
                            </Form.Group>


                            <Button className="d-inline-block btn-block w-50  my-3 py-2" size="lg" variant="dark" type="submit">
                                Send
                        </Button>
                        </Form>
                    </Col>

                </Row>
            </Container>


        )
    }
}
export default ContactPage