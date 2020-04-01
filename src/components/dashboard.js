import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Col, Row, Container} from 'react-bootstrap'
import './style.css'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            shows: [],
        }
    }

componentDidMount() {

    fetch('https://lp-server1.lastplay.tv/app/api/series?apikey=33af4f32a34140faa3b3119541c78e14',           
     { headers: {
        'Accept': 'application/json',
                  'Content-Type': ' application/json',
                  'X-API-SERVER': '85499f9f'
     }})
    .then(res => res.json())
    .then((data)=> {
        this.setState({ 
            shows: data
        })
        console.log(this.state.shows)
    })
    .catch(console.log)
}


render() {
    return (
        <Container fluid>
            <Row xs={2} lg={6}>
            {this.state.shows.map(show =>
            <Col className='shows' lg={2}>
                <Link to={`tv/${show.id}`}><a key={show.id}> 
                <img src={`https://lp-server1.lastplay.tv/app/MediaCover/${show.id}/poster-250.jpg`} /> <br />
                <span>{show.title}</span>
                </a></Link>
                </Col>)}
                </Row>
        </Container>
    )
    }
}
export default Dashboard