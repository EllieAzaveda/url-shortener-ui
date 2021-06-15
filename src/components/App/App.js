import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }

  componentDidMount() {
    getUrls()
      .then(urlData => {
        if(typeof urlData === 'string') {
          this.setState({ error: urlData })
        } else {
          this.setState({ urls: urlData.urls })
        }
      })
      .catch(err => err.message)
  }

  render() {
    console.log(this.state.urls)
    return (
      <main className="App">
        <>
        <h1>URL Shortener</h1>
        <UrlForm
          urls={this.state.urls}
        />
        <UrlContainer
          urls={this.state.urls}
        />
        </>
      </main>
    );
  }
}

export default App;
