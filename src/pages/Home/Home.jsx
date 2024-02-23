import Navbar from "../../components/Navbar/Navbar.jsx";
import * as S from "./HomeStyled.js";

const Home = () => {
    return (
        <S.HomePage id="home-page" >
            <Navbar action="Login" />
        </S.HomePage>
    )
}

export default Home;
