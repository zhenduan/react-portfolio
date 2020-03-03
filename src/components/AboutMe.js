import React from 'react'
import { Container, Row, Col, ProgressBar, Badge } from 'react-bootstrap'

import avatar from '../img/avatar.png'

export default function AboutMe() {
    return (
        <Container>
            <Row>
                <Col bg="dark" md={4} className="text-center">
                    <img src={avatar} alt="Zhen Duan" fluid rounded className="p-4" />
                    <h1>Zhen Duan</h1>
                    <p>Web Developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laborum in molestiae ipsum hic nisi pariatur facere assumenda fuga repellat dolorem quam quibusdam sit quos perferendis distinctio ab illo exercitationem, cumque voluptatibus beatae sequi, blanditiis placeat corporis! Expedita incidunt saepe maiores minus odit consequatur nobis dolores, voluptatibus repellendus illum dignissimos natus voluptas laborum veritatis eius vel cupiditate aspernatur quos inventore, molestias at labore sequi. Voluptate sequi aut beatae exercitationem earum sunt eius, cupiditate ratione! Maiores illum praesentium dolo</p>
                </Col>
                <Col md={8} className="bg-dark my-3 text-white">

                    {/* Education */}
                    <h1>Education</h1>

                    <h4>My University  <span><Badge variant="secondary">2008 - 2012</Badge></span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laborum in molestiae ipsum hic nisi pariatur facere assumenda fuga repellat dolorem quam quibusdam sit quos perferendis distinctio ab illo</p>
                    <h4>My University  <span><Badge variant="secondary">2015 - 2017</Badge></span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laborum in molestiae ipsum hic nisi pariatur facere assumenda fuga repellat dolorem quam quibusdam sit quos perferendis distinctio ab illo</p>
                    {/* Experience */}
                    <h1>Experience</h1>

                    <h4>Company 1  <span><Badge variant="secondary">2008 - 2012</Badge></span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laborum in molestiae ipsum hic nisi pariatur facere assumenda fuga repellat dolorem quam quibusdam sit quos perferendis distinctio ab illo</p>
                    <h4>Company 2  <span><Badge variant="secondary">2008 - 2012</Badge></span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laborum in molestiae ipsum hic nisi pariatur facere assumenda fuga repellat dolorem quam quibusdam sit quos perferendis distinctio ab illo</p>

                    {/* Skills */}
                    <h1>Skills</h1>
                    <div className="px-5">
                        HTML <ProgressBar animated variant="success" now={40} className="my-2" />
                        CSS <ProgressBar animated variant="info" now={20} className="my-2" />
                        JavaScript<ProgressBar animated variant="warning" now={60} className="my-2" />
                        Bootstrap<ProgressBar animated variant="danger" now={80} className="my-2" />
                        Wordpress<ProgressBar animated variant="danger" now={80} className="my-2" />
                        React<ProgressBar animated variant="danger" now={80} className="my-2" />


                    </div>
                </Col>
            </Row>

        </Container>
    )
}
