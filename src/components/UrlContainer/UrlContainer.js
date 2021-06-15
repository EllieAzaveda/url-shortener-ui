import React from 'react';
import './UrlContainer.css';

const UrlContainer = ({ urls }) => {

  const urlEls = urls.map(url => {
    return (
      <div className="url" key={url.id}>
        <h3 data-cy='title'>{url.title}</h3>
        <a data-cy='short-url' href={url.short_url} target="blank">{url.short_url}</a>
        <p data-cy='long-url'>{url.long_url}</p>
      </div>
    )
  });


  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
