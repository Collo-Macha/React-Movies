
import NetflixLogo from "../../images/react-movie-logo.svg";

import { Link } from "react-router-dom";

import  TMDBLogo  from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg} from "./Header.styles";

export const Header = () => (
    <Wrapper>
        <Content>
            <Link to="/">
                 <LogoImg src={NetflixLogo} alt="Netflix Logo" />
            </Link>
            <LogoImg src={TMDBLogo} alt="TMDB Logo" />
        </Content>
    </Wrapper>
);
