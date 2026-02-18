import { Wrapper, Content } from './Grid.styles';

import PropTypes from "prop-types";

export const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

Grid.propTypes = {
    header: PropTypes.string,
    children: PropTypes.node
}