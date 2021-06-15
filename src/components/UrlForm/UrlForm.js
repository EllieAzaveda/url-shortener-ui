import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: '',
    };
  }

  shortenURL = (urlInput) => {
    let urlArr = urlInput.split('.com/')
    let baseURL = urlArr[0]
    let shortyLength = Math.ceil(urlArr[1].length/3)
    let shortyURL =  urlArr[1].slice(0, shortyLength);

    return `${baseURL}.com/${shortyURL}`;
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  }

  handleURLChange = e => {
    this.setState({ urlToShorten: e.target.value });
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  handleSubmit = e => {
    e.preventDefault();
    let newUrl = {
      long_url: this.state.urlToShorten,
      title: this.state.title
    }
    if(!this.state.title && !this.state.urlToShorten) {
      console.log("error")
    } else {
      this.props.postNewUrl(newUrl);
    }
    this.clearInputs();
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleTitleChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleURLChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
