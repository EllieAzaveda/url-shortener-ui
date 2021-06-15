import React, { Component } from 'react';
import './App.css';
import { getUrls, postURL } from '../../apiCalls';
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
    this.getAllSavedURLs();
  }

  getAllSavedURLs() {
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

  postNewUrl(urlInput){
    postURL(urlInput)
    .then(response =>
      this.setState({ urls: [ ...this.state.urls, response ]})
    )
    .catch(err => err.message)

  }

  render() {
    return (
      <main className="App">
        <>
        <h1>URL Shortener</h1>
        <UrlForm
          urls={this.state.urls}
          postNewUrl={this.postNewUrl}
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
