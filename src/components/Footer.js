import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <Row>
            <Col className="bg-dark text-white text-center py-3">
                Zhen Duan  &copy; <span>{currentYear}</span>

            </Col>
        </Row>
    )
}
