import React from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

const propTypes = {

};

class ReactJWPlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoTitle: '',
      autostart: 'viewable',
    };

    console.log(this.props)

    this.onReady = this.onReady.bind(this);
    this.onVideoLoad = this.onVideoLoad.bind(this);

    // each instance of <ReactJWPlayer> needs a unique id.
    // we randomly generate it here and assign to the container instance.
    this.playerId = ' ';

  }
  onReady(event) {
    // interact with JW Player API here
  }

  onVideoLoad(event) {
    this.setState({
      videoTitle: event.item.description // this only works with json feeds!
    });
  }
  render() 
  {
    return (
      <div className='react-jw-player-container'>
        <h1>{ this.state.videoTitle }</h1>
        <Player
      playsInline
      poster={this.props.poster}
      src={this.props.source}
    />
      </div>
    );
  }
}


export default ReactJWPlayerContainer;