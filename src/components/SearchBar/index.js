import { Component } from "react";

import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from "./SearchBar.styles";

import PropTypes from "prop-types";

class SearchBar extends Component {
    state = { value: '' };
    timeout = null;

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            clearTimeout(this.timeout);
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                const { value } = this.state;
                this.props.setSearchTerm(value);
            }, 500);
        }
    }

    handleSearchClick = () => {
        const { value } = this.state;
        this.props.setSearchTerm(value);
    };

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.props.setSearchTerm(this.state.value);
        }
    };

    render() {
        return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" onClick={this.handleSearchClick} />
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={(event) => this.setState({ value: event.currentTarget.value })}
                    onKeyDown={this.handleKeyPress}
                    value={this.state.value}

                />
            </Content>


        </Wrapper>
    )
    }



    
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}

export default SearchBar;