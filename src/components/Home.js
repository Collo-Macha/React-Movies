import { useHomeFetch } from "../hooks/useHomeFetch";

import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../config";

import { HeroImage } from "./HeaderImage";

import NOImage from "../images/no_image.jpg";

import { Grid } from "./grid";

import Spinner from "./Spinner";

import { Thumb } from "./Thumb";

import { SearchBar } from "./SearchBar";

import { Button } from "./Button";

export const Home = () => {
    const {state, loading, error, searchTerm, setSearchTerm, fetchMovies, setIsLoadingMore} = useHomeFetch();
 
    console.log(state);

    if (error) return <div>Something went wrong...</div>;

    return (
        <>
        {!searchTerm && state.results[0] ? (
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
            />
        ) : null}
        <SearchBar setSearchTerm={setSearchTerm}/>
        <Grid header={searchTerm ? `Search Results for "${searchTerm}"` : "Popular Movies"}>
            {(state && state.results ? state.results : []).map((movie) => (
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
        {state.page < state.total_pages && !loading && (
            <Button text="Load More" callback={() => setIsLoadingMore(true)}/>
        )}
        </>
    );
}
