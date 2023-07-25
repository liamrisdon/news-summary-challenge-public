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

FrontNewsPage.defaultProps = {
    newsData: [],
}

FrontNewsPage.propTypes = {
    newsData: PropTypes.arrayOf(
        PropTypes.object,
    )
}

export default NewsPage;