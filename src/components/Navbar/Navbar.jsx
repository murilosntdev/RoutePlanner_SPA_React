import { Link } from "react-router-dom";
import orangeIsoLogo from "../../images/orangeIsoLogo.svg";
import { SecondaryButton } from "../Button/Button"
import { ImgLogo, Nav } from "./NavbarStyled";

const Navbar = () => {
    return (
        <Nav>
            <Link to={"/"}>
                <ImgLogo src={orangeIsoLogo} alt="IsoLogo RoutePlanner" />
            </Link>
            <SecondaryButton disabled>Login</SecondaryButton>
        </Nav>
    )
}

export default Navbar;