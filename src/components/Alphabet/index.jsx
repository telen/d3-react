import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import * as d3 from 'd3';

import Letter from './Letter';

class Alphabet extends Component {
  static letters = "abcdefghijklmnopqrstuvwxyz1234567890".split('');
  state = { alphabet: []}

  componentWillMount() {
    d3.interval(() => this.setState({
      alphabet: d3.shuffle(Alphabet.letters)
        .slice(0, Math.floor(Math.random() * Alphabet.letters.length))
        .sort()
   }), 1500);
  }

  render() {
    let transform = `translate(${this.props.x}, ${this.props.y})`;

    return (
      <g transform={transform}>
        <ReactTransitionGroup component="g">
          {this.state.alphabet.map((d, i) => (
            <Letter d={d} i={i} key={`letter-${d}`} />
          ))}
        </ReactTransitionGroup>
      </g>
    );
  }
}

export default Alphabet;
