import PropTypes from "prop-types";

export default function SearchResult ( { countMovies } )
{
    return <>
        <p className = "search-result">
            Found <strong>{ countMovies }</strong> results
        </p>
    </>;
}

SearchResult.propTypes = {
    countMovies: PropTypes.number.isRequired
};
