import React, { Component } from 'react';
import "./downloads.scss";
import Pdf from '../../Dokumentation-Dirnberger.pdf';

class Download extends Component {

  render() {

    return (
        <div className = "App" id="app">
          <a href = {Pdf} target = "_blank"><h5>Hier geht's zum Pdf</h5></a>
        </div>
    );

  }
}

export default Download;