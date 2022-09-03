import logo from '../../../assets/icons/logo.svg';
import { Link } from '../../common/Link.styled';
import { Logo, StyledHome } from './Home.styled';


const Home = props => {

    return (
        <StyledHome>
            <Logo src={logo} alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </Link>
        </StyledHome>
    );
};

export default Home;