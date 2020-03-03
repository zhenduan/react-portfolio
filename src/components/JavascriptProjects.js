import React from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import javascriptImage1 from '../img/javascriptProjects/usergenerator.jpg'
export default function JavascriptProjects() {
    return (
        <Container className="d-flex">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={javascriptImage1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={javascriptImage1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </Container>
    )
}
