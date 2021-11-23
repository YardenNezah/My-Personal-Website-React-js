import './Header.css';
import cloud from '../../asset/cloud.png'

const Header = () => {
    return (
        <header>
            <img src={cloud} alt="img" className="right-cloud"></img>
            <h1 className="title">I'm a Dev Club Manager.</h1>
            <h2 className="programmer-h2">and a
                <u> pro</u>grammer</h2>
                <img src={cloud} alt="img" className="left-cloud"></img>
        </header>
    )
};

export default Header;
