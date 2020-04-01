import React, {Component} from 'react';
import './style.css';
import ReactJWPlayerContainer from './player'
import M from "materialize-css";
import {Tab, Col, Nav, Row, Container} from 'react-bootstrap'
class Video extends React.Component {
    constructor(props) {
        super();
        this.displayData = [];

        this.state = {
            showdata: this.displayData,
            shows: [],
            episodes: [],
            player: '',
            poster: '',
            not_visible: true,
            loaded:false
        }
        

        this.appendData = this.appendData.bind(this);

    };
    componentDidMount() {
        let urls = [fetch(`https://lp-server1.lastplay.tv/app/api/episode?seriesId=${this.props.match.params.id}&apikey=33af4f32a34140faa3b3119541c78e14`),
                    fetch(`https://lp-server1.lastplay.tv/app/api/series/id=${this.props.match.params.id}?apikey=33af4f32a34140faa3b3119541c78e14`)]
        Promise.all(urls)
        .then(([res1, res2]) => { 
            return Promise.all([res1.json(), res2.json()]) 
         })
         .then(([res1, res2, res3]) => {
             res3 = res1.filter(res3 => res3.seasonNumber > 0)
           this.setState({
               shows: res2,
               episodes: res3,
               loaded: true,
           })
         });
         M.Tabs.init(this.Tabs);
   }

    appendData = (a) => {
           let link = 'https://lp-server1.lastplay.tv' + a.path.replace('/media/disk1', '')
           let pos = `https://lp-server1.lastplay.tv/app/MediaCover/${this.state.shows.id}/fanart.jpg`
            this.setState({
                player: link,
                poster: pos,
                not_visible: false
        })
        this.useEffect()
    }

    useEffect = () => {
        window.scrollTo(0, 0)
      }

    render() {

        const style = this.state.not_visible ? {display: 'none',} : {}
        
let i = 0
{if (this.state.loaded === false) return null;
 }
 console.log(this.state.shows)

        return ( 
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <img src={`https://lp-server1.lastplay.tv/app/MediaCover/${this.state.shows.id}/poster-250.jpg`} />
                    </Col>
                    <Col xs={12} md={8}>
                    <h3>{this.state.shows.title}</h3>
                    <ul>
                        <li>Network: {this.state.shows.network}</li>
                        <li>Runtime: {this.state.shows.runtime} min.</li>
                        <li>Genres: {this.state.shows.genres.join(', ')}</li>
                    </ul>
                    </Col>
                    </Row>
                    <Row xs={12} style={{clear:'both'}}>
      <p>{this.state.shows.overview}</p>
    </Row>
                <Row xs={8}>
                <div className = "display-data-Container col s10 offset-s3 center-align" style={style}  > 
                    <ReactJWPlayerContainer  source={this.state.player} poster={this.state.poster}/>
                </div> 
                </Row>
<Row>
            <Tab.Container id="season-tabs" defaultActiveKey="first">
                
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {this.state.episodes.map(episode => {
                            if (this.state.shows.seasonCount > i) {
                                    i++
                            return ( 
                                <Nav.Item>
                                <Nav.Link eventKey={`season${i}`}>Season {i}</Nav.Link>
                                </Nav.Item>
                                )}})}
                                  </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
            {this.state.episodes.map(episode =>
                {
                    if (episode.hasFile === false) {
                        return ( 
                            
                            <Tab.Pane eventKey={`season${episode.seasonNumber}`}>
                            <a  style={{color: 'red', fontStyle: 'italic'}}>{episode.episodeNumber} - {episode.title}</a>
                          </Tab.Pane>
                        )
                    }  {
                        return ( 
                            <Tab.Pane eventKey={`season${episode.seasonNumber}`}>
                        <a  id={`season${episode.seasonNumber}`}style={{cursor: 'pointer'}} onClick = {this.appendData.bind(this, episode.episodeFile)}>{episode.episodeNumber} - {episode.title}</a> 
                        </Tab.Pane>
                       
                            )
                        }
                    }
                )}
                  
      </Tab.Content>
      
    </Col>
</Tab.Container>
</Row>
</Container>
        )
    
    }
}


export default Video;

