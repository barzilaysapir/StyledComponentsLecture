import { Link } from '../../common/Link.styled';
import { Logo, StyledHome } from './Home.styled';


const Home = props => {

    return (
        <StyledHome>
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