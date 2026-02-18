import { useState, useEffect } from 'react';
import API from '../API';
import { isPersistedState } from '../helpers';

export const useMovieFetch = movieId => {
    // start with a shape that includes arrays so components can safely map over them
    const [state, setState] = useState({ actors: [], directors: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);

            } catch (error) {
                setError(true);
            }
        };

        const sessionState = isPersistedState(movieId);

        // only reuse cached data if it contains a movie title (i.e. it's not the initial empty object)
        if (sessionState && sessionState.original_title) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchMovie();
    }, [movieId]);

    // Write to sessionStorage
    useEffect(() => {
        // only persist if we have fetched something meaningful
        if (Object.keys(state).length && state.original_title) {
            sessionStorage.setItem(movieId, JSON.stringify(state));
        }
    }, [movieId, state]);

    return { state, loading, error };

}