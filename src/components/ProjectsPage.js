import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import todolist from '../img/todolist.jpg'
import usergenerator from '../img/usergenerator.jpg'
import moneytracker from '../img/moneytracker.jpg'
import semilai from '../img/semilai.jpg'
import aussiehan from '../img/aussiehan.jpg'
import focusin from '../img/focusin.jpg'
import htmlproject1 from '../img/htmlproject1.jpg'
import htmlproject2 from '../img/htmlproject2.jpg'
import htmlproject3 from '../img/htmlproject3.jpg'

export class ProjectsPage extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                // HTML CSS SASS
                <div className="projects-grid">
                    {/* Card1 */}

                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${htmlproject1}) center / cover` }}></CardTitle>
                        <CardText>
                            Web developer portfolio website built with HTML, CSS, JavaScript and SASS.
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://github.com/zhenduan/portfolio_practice.git" target="_blank">Github</Button>
                            <Button colored href="https://laughing-blackwell-ca5b20.netlify.com/index.html" target="_blank" >Live Demo</Button>
                        </CardActions>
                    </Card>

                    {/* Card 2 */}

                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${htmlproject2}) center / cover` }}></CardTitle>
                        <CardText>
                            Simple tech news website built with pure HTML and CSS.
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://github.com/zhenduan/news_websit.git" target="_blank">Github</Button>
                            <Button colored href="https://awesome-yalow-e1707a.netlify.com/" target="_blank" >Live Demo</Button>
                        </CardActions>
                    </Card>

                    {/* Card 3 */}
                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${htmlproject3}) center / cover` }}></CardTitle>
                        <CardText>
                            Single page hotel display website built by pure HTML, CSS and jQuery.
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://github.com/zhenduan/hotel-flex-project.git" target="_blank">Github</Button>
                            <Button colored href="https://awesome-jones-f2a2b6.netlify.com/" target="_blank" >Live Demo</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        // Wordpress Projects
        if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Card1 WP-Semilai */}

                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${semilai}) center / cover` }}></CardTitle>
                        <CardText>
                            E-commerce website created by WordPress for Semilai Dessert & Bakery
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://www.semilai.com.au/" target="_blank" >Live Site</Button>
                        </CardActions>
                    </Card>

                    {/* Card 2 WP-AussieHan */}
                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${aussiehan}) center / cover` }}></CardTitle>
                        <CardText>
                            Elain Property real estate company website created by WordPress
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://www.elainproperty.com.au/" target="_blank" >Live Site</Button>
                        </CardActions>
                    </Card>

                    {/* Card 3 WP-Focusin */}
                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${focusin}) center / cover` }}></CardTitle>
                        <CardText>
                            Focusin Studio, created by WordPress with nice animation.
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://www.focusin.com.au/" target="_blank" >Live Site</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        // JS
        if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Card1 JS-Todo List */}

                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${todolist}) center / cover` }}></CardTitle>
                        <CardText>
                            Simple Todo List web app, created by JavaScript with local storage.
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://github.com/zhenduan/Javascript-TodoList.git" target="_blank">Github</Button>
                            <Button colored href="https://angry-nightingale-9ac466.netlify.com/" target="_blank" >Live Demo</Button>
                        </CardActions>
                    </Card>

                    {/* Card 2 JS-UserGenerator */}
                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${usergenerator}) center / cover` }}></CardTitle>
                        <CardText>
                            Simple random user generator web app, created by JavaScript.
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://github.com/zhenduan/RandomUser.git" target="_blank">Github</Button>
                            <Button colored href="https://unruffled-turing-4c3ead.netlify.com/" target="_blank" >Live Demo</Button>
                        </CardActions>
                    </Card>

                    {/* Card 3 JS-Money Tracker */}
                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${moneytracker}) center / cover` }}></CardTitle>
                        <CardText>
                            Simple money tracker web app built by JavaScript, featured with local storage.
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://github.com/zhenduan/MoneyTracker.git" target="_blank">Github</Button>
                            <Button colored href="https://thirsty-cray-b2316b.netlify.com/" target="_blank" >Live Demo</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* Card1 WP-Semilai */}

                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${semilai}) center / cover` }}></CardTitle>
                        <CardText>
                            E-commerce website created by WordPress for Semilai Dessert & Bakery
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://www.semilai.com.au/" target="_blank" >Live Site</Button>
                        </CardActions>
                    </Card>

                    {/* Card 2 WP-AussieHan */}
                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${aussiehan}) center / cover` }}></CardTitle>
                        <CardText>
                            Elain Property real estate company website created by WordPress
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://www.elainproperty.com.au/" target="_blank" >Live Site</Button>
                        </CardActions>
                    </Card>

                    {/* Card 3 JS-Money Tracker */}
                    <Card shadow={3} style={{ width: '320px', height: '400px', margin: '1rem' }}>
                        <CardTitle expand style={{ color: '#fff', background: `url(${moneytracker}) center / cover` }}></CardTitle>
                        <CardText>
                            Simple money tracker web app built by pure JavaScript, featured with local storage which can store data on client side.
                    </CardText>
                        <CardActions border className="card-btns">
                            <Button colored href="https://github.com/zhenduan/MoneyTracker.git" target="_blank">Github</Button>
                            <Button colored href="https://thirsty-cray-b2316b.netlify.com/" target="_blank" >Live Demo</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }


    render() {

        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className="tabFont"> HTML CSS SASS</Tab>
                    <Tab className="tabFont">Wordpress</Tab>
                    <Tab className="tabFont">Javascript</Tab>
                    <Tab className="tabFont">React</Tab>

                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default ProjectsPage
