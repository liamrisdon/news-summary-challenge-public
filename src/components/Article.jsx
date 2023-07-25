import PropTypes from 'prop-types';

const Article = ({ newsData: { thumbnail, headline } }) => {

    return (
        <div>
            <img src={thumbnail} />
            <h4>{headline}</h4>
        </div>
    )
}

Article.PropTypes = {
    newsData: PropTypes.exact({
        thumbnail: PropTypes.string.isRequired,
        headline: PropTypes.string.isRequired
    })
}

export default Article;