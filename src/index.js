import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import { Header } from './components';

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

  const App = () => {

    return (
    <>
    
    <div className="app">
      
        <Header 
                />
      
    </div>
    </>
    )
  }



ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))