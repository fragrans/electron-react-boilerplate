// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    var aStyle = {
      backgroundColor: 'red',
      fontSize:'100px'
    };

    return (
      <div style={{backgroundColor:'aqua'}}>
        <div className={styles.container} data-tid="container">
          <h2>适配器号</h2>
          <div> John Doe </div>
          <input style={aStyle} type="text" value="CX001" size="8" />
        </div>
      </div>
    );
  }
}
