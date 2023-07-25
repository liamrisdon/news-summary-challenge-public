import PropTypes from 'prop-types';

const Article = ({ newsData: { thumbnail, headline } }) => {

    return (
        <div>
            <img src={thumbnail} />
            <h4>{headline}</h4>
        </div>
    )
}

Article.propTypes = {
    newsData: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        headline: PropTypes.string.isRequired
    })
}

export default Article;