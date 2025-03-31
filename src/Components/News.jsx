import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {


    static defaultProps = {
        country: "us",
        pageSize: 6,
        category: "entertainment",
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
    }

    updateNews = async () => {
        this.props.useProgress(20);
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6abf02839735460c8e4deab58df88a0f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.useProgress(50);
        let fdata = await fetch(url);
        let data = await fdata.json();
        this.setState({ 
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false,
        });
        this.props.useProgress(100);
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 }, async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6abf02839735460c8e4deab58df88a0f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            let fdata = await fetch(url);
            let data = await fdata.json();
            this.setState({ 
                articles: this.state.articles.concat(data.articles),
                totalResults: data.totalResults,
                loading: false,
            });
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    render() {
        return (
            <>
            
                <h2 className='my-4 mx-5'>Newsify - Today's headlines on {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults/2}
                    loader={<div className="container d-flex justify-content-center align-items-center"><Spinner /></div>}
                >
                    <div className="container d-flex  justify-content-center align-items-center">
                        <div className=" d-flex flex-wrap justify-content-center align-items-center">
                            {!this.state.loading && this.state.articles.map((element, index) => (
                                <div className="" key={index}>
                                    <NewsItem 
                                        imageUrl={!element.urlToImage
                                            ? "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/8640x4860+0+453/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fed%2F36%2F7c1147c04e77a72370dd078dec78%2Fap24181696267025.jpg" 
                                            : element.urlToImage} 
                                        title={element.title ? element.title : ""}
                                        source={
                                            !element.source || !element.source.name 
                                              ? "" 
                                              : element.source.name.length >= 15 
                                                ? element.source.name.slice(0, 15) + '...'
                                                : element.source.name
                                          }
                                        publishedAt={"Date Of Publish: " + new Date(element.publishedAt).toGMTString()}
                                        description={element.description ? element.description : ""}  
                                        url={element.url}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}
