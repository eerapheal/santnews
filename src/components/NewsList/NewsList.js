import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../Redux/NewsActions';
import './NewsList.scss'

const NewsList = ({ news, loading, error, fetchNews }) => {
  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div  className='container'>
      <h2 className='Headlines'>Top Headlines</h2>
      <ul  className='HeadlineWraper'>
        {news.map((article) => (
          <li key={article.title} className='newsCard stack featured'>
            
            <img className='newsImg'src={article.urlToImage} alt="Article Thumbnail" />
            <div className='cardContent'>
              <h3>{article.title}</h3>
            {/* <p>{article.description}</p> */}
            {/* <p className='newsContent'>{article.content }</p> */}
            <p>Date {article.publishedAt}</p>
            <p>
              <a href={article.url}>
                Read more
              </a>
            </p>
           </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    loading: state.news.loading,
    error: state.news.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: () => dispatch(fetchNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
