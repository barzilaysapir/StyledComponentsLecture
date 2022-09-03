import { useTheme } from "styled-components/macro";
import { Button, Link } from '../../common';
import { Logo, StyledHome, ThemeIcon } from './Home.styled';

const Home = props => {

    const { id, toggleTheme } = useTheme();

    return (
        <StyledHome>
            <Button onClick={toggleTheme}>
                Toggle Theme
                <ThemeIcon themeId={id} />
            </Button>

            <Logo />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link external
                href="https://reactjs.org"
                rel="noopener noreferrer"
            >
                Learn React
            </Link>
        </StyledHome>
    );
};

export default Home;