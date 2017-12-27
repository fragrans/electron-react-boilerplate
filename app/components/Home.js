// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    const aStyle = {
      backgroundColor: 'red',
      fontSize: '100px'
    };
    
    return (
      <div style={{ backgroundColor: 'aqua' }}>
      <div style={{ float: 'left' }}>  John Doe </div>
      <div style={{ float: 'right' }}> Date / Time </div>
      <div style={{ width: '100%' }} className={styles.container} data-tid="container">
      <h2>请读卡</h2>
      
      <input style={aStyle} type="text" size="8" />
      </div>
      </div>
    );
  }
}
