import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, publishedAt,source} = this.props;
    return (
      <div className=''>
        <div className="card mx-2 my-2" style={{ width: '21rem' }} id='cardId'>
          <img style={{ width: 'auto', height: 'auto', objectFit: 'contain' }} src={imageUrl} className="card-img-top" alt="..." />
          <span className="position-absolute translate-middle badge rounded-pill bg-primary" style={{left:'80%' ,zIndex:'1',top:'4%'}}>
            {source}
          </span>
          <div className="card-body">
            <h5 className="card-title ">{title}</h5><br />
            <p className="card-text mark">{description}</p>
            <p className="card-text"><small className="text-body-secondary">{publishedAt}</small></p>
            <a href={url} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm">Explore full news here</a>
          </div>
        </div>
      </div>
    )
  }
}
