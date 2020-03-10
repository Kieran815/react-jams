import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">

        <section id="buttons" >
          <Button
            id="previous"
            variant='contained'
            color='primary'
             style={{background: 'orange'}}
            onClick={this.props.handlePrevClick}
          >
            <span className="ion ion-md-skip-backward"></span>
          </Button>
          <Button
            id="play-pause"
            variant='contained'
            color='primary'
            style={{background: 'orange'}}  onClick={this.props.handleSongClick}
          >
            <span className={`ion ${this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play'}`}></span>
          </Button>
          <Button
            id="next"
            variant='contained'
            color='primary'
            style={{background: 'orange'}}  onClick={this.props.handleNextClick}
          >
            <span className="ion ion-md-skip-forward"></span>
          </Button>
        </section>

        <section id="time-control">
          <div className="current-time">Time Remaining:</div>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || "0"}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.props.formatTime(this.props.currentTime)} / {this.props.formatTime(this.props.duration)}</div>
        </section>

        <section id="volume-control">
          <div className="current-volume">Volume</div>
          <input
            type="range"
            className="vol-bar"
            value={this.props.currentVolume}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
          />
        </section>
      </section>
    );
  }
}

export default PlayerBar;
