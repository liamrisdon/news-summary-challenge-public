import PropTypes from 'prop-types';
import Article from './Article';

const NewsPage = ({ newsData }) => {

    const news = newsData.map(newsArticle => <Article key={newsArticle.id} newsData={newsArticle.fields} />)

    return (
        <>
            {news}
        </>
    )
}

NewsPage.defaultProps = {
    newsData: [],
}

NewsPage.propTypes = {
    newsData: PropTypes.arrayOf(
        PropTypes.object
    )
}

export default NewsPage;