import React from 'react'
import Typewriter from 'typewriter-effect';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HomeTypeWriter() {
    return (
        <div className="typeWriter">
            <Container >
                <Row>
                    <Col>
                        <h1 className="display-2">I'm Zhen</h1>
                        <h3 className="">I specialize in front-end and back-end web development</h3>
                        <Typewriter
                            options={{
                                strings: ['Love Life', 'Love Coding'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                        <Link className="nav-link" to="/projects"><Button variant="outline-light" size="lg">View My Projects</Button></Link>

                    </Col>

                </Row>

            </Container>
        </div>
    )
}
