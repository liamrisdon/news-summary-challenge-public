import PropTypes from 'prop-types';

const Article = ({ newsData: { thumbnail, headline } }) => {

    return (
        <div className="row d-flex container-fluid align-items-center justify-content-center" align="center">
            <img src={thumbnail} className="img-thumbnail ${styles.max-width:20%}" />
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