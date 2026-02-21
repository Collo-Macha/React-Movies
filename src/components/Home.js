import { Component } from "react";

import API from '../API';

import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../config";

import { HeroImage } from "./HeaderImage";

import NOImage from "../images/no_image.jpg";

import { Grid } from "./grid";

import Spinner from "./Spinner";

import { Thumb } from "./Thumb";

import SearchBar from "./SearchBar";

import { Button } from "./Button";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

class Home extends Component{
    state = {
        movies: initialState,
        searchTerm: '',
        loading: false,
        error: false,
        isLoadingMore: false
    }

    fetchMovies = async (page, searchTerm = '') => {
        try {
        this.setState({ loading: true, error: false });

        const movies = await API.fetchMovies(searchTerm, page);

        this.setState(prev => ({
            ...prev,
            movies: {
            ...movies,
            results: page > 1 ? [...prev.movies.results, ...movies.results] : [...movies.results]
        }}));
        } catch (error) {
        this.setState({ error: true, loading: false });
        } finally {
        this.setState({ loading: false });
        }
    };

    handleSearch = (searchTerm) => 
        this.setState({ movies: initialState, searchTerm }, () => {
            this.fetchMovies(1, searchTerm);
        });
        
    handleLoadMore = () => {
        this.fetchMovies(this.state.movies.page + 1, this.state.searchTerm);
    }

    componentDidMount() {
        this.fetchMovies(1);
    }

    render () {

        const { movies, searchTerm, loading, error } = this.state;

        if (error) return <div>Something went wrong...</div>;
    
            return (
        <>
        {!searchTerm && movies.results[0] ? (
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
                title={movies.results[0].original_title}
                text={movies.results[0].overview}
            />
        ) : null}
        <SearchBar setSearchTerm={this.handleSearch}/>
        <Grid header={searchTerm ? `Search Results for "${searchTerm}"` : "Popular Movies"}>
            {(movies && movies.results ? movies.results : []).map((movie) => (
                <Thumb
                    key={movie.id}
                    clickable
                    image={
                        movie.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NOImage
                    }
                    movieId={movie.id}
                />
            ))}
        </Grid>

        {loading && <Spinner />}
        {movies.page < movies.total_pages && !loading && (
            <Button text="Load More" callback={this.handleLoadMore}/>
        )}
        </>
    );
    }
}

export default Home;