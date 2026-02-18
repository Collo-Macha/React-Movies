import { useState } from "react";

import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from "./SearchBar.styles";

import PropTypes from "prop-types";

export const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setSearchTerm(state);
        }
    };

    const handleSearchClick = () => {
        setSearchTerm(state);
    };

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" onClick={handleSearchClick} />
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={(event) => setState(event.currentTarget.value)}
                    onKeyDown={handleKeyPress}
                    value={state}

                />
            </Content>


        </Wrapper>
    )
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}