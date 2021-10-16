/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { GET_ARTICLE, TAG } from '../redux/actions';
function Home(props: any) {
    const handleYourFeed = () => { }

    useEffect(() => {
        if (props.user.token) {
            fetch('https://conduit.productionready.io/api/tags', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json, text/plain, */*',
                    'Authorization': `Token ${props.user.token}`
                },
            }).then(res => res.json()).then(res => {
                props.dispatch({ type: TAG, tags: res.tags });
            }
            );
        }
    }, [props.user.token]);

    useEffect(() => {
        if (props.user.token) {
            fetch('https://conduit.productionready.io/api/articles?limit=10&offset=0', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json, text/plain, */*',
                    'Authorization': `Token ${props.user.token}`
                },
            }).then(res => res.json()).then(res => {
                props.dispatch({
                    type: GET_ARTICLE,
                    articles: res.articles,
                    articlesCount: res.articlesCount
                });
            }
            );
        }
    }, [props.user.token]);

    return (
        <div className="home-page">
            <div className="banner">
                <div className="container">
                    <h1 className="logo-font">Blog App</h1>
                    <p>A place to share your knowledge.</p>
                </div>
            </div>
            <div className="container page">
                <div className="row">

                    <div className="col-md-9">
                        <div className="feed-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <a className="nav-link">Your
                                        Feed</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" onClick={handleYourFeed}>Global Feed
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">#tag</a>
                                </li>
                            </ul>
                        </div>

                        <div className="article-preview">
                            <div className="article-meta">
                                <div className="info">
                                    <a className="author">user name</a>
                                    <span className="date">date</span>
                                </div >
                                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                    <i className="ion-heart"></i>1</button >
                            </div >
                            <a className="preview-link" >
                                <h1>title</h1>
                                <p>This is the description for the post.</p>
                                <span>Read more...</span>
                            </a >
                        </div >
                        <div className="article-preview">
                            <p>There are no articles available</p>
                        </div >

                    </div >

                    <div className="col-md-3">
                        <div className="sidebar">
                            <p>Popular Tags</p>

                            {props.tags.length && <div className="tag-list">
                                {
                                    props.tags.map((item: any) => (
                                        <a key={item} className="tag-pill tag-default">{item}</a>
                                    ))
                                }
                            </div>}
                        </div>
                    </div >

                </div >
            </div >
        </div >
    );
}

const mapStateToProps = (state: any) => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        user: state.loginReducer.user,
        tags: state.articleReducer.tags,
        articles: state.articleReducer.articles,
        articlesCount: state.articleReducer.articlesCount,
    };
}

export default connect(mapStateToProps)(Home);