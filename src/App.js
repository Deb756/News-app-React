
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  state = {progress:0}

  useProgress = (progress) =>{
    this.setState({progress:progress})
  }

  // c = "Debabrta"
  pageSize = 15;
  api_key =process.env.REACT_APP_NOT_SECRET_CODE;
  render() {
    return (
      <>
        <Router>
          {/* <div> */}
          <Navbar></Navbar>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News useProgress={this.useProgress} api_key={this.api_key} key="general" pageSize={this.pageSize} category="general"></News>} />
            <Route exact path="/Business" element={<News useProgress={this.useProgress} api_key={this.api_key} key="business" pageSize={this.pageSize} category="business"></News>} />
            <Route exact path="/Entertainment" element={<News useProgress={this.useProgress} api_key={this.api_key} key="entertainment" pageSize={this.pageSize} category="entertainment"></News>} />
            <Route exact path="/General" element={<News useProgress={this.useProgress} api_key={this.api_key} key="general" pageSize={this.pageSize} category="general"></News>} />
            <Route exact path="/Health" element={<News useProgress={this.useProgress} api_key={this.api_key} key="health" pageSize={this.pageSize} category="health"></News>} />
            <Route exact path="/Science" element={<News useProgress={this.useProgress} api_key={this.api_key} key="science" pageSize={this.pageSize} category="science"></News>} />
            <Route exact path="/Sports" element={<News useProgress={this.useProgress} api_key={this.api_key} key="sports" pageSize={this.pageSize} category="sports"></News>} />
            <Route exact path="/Technology" element={<News useProgress={this.useProgress} api_key={this.api_key} key="technology" pageSize={this.pageSize} category="technology"></News>} />
          </Routes>
          {/* </div> */}
          {/* </div> */}
        </Router>
        
      </>
    )
  }
}

