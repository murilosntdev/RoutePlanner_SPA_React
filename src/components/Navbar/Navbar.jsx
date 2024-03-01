import { Link } from "react-router-dom";
import orangeIsoLogo from "../../images/orangeIsoLogo.svg";
import { SecondaryButton } from "../Button/Button"
import { ImgLogo, Nav } from "./NavbarStyled";

const Navbar = ({ action }) => {
    return (
        <Nav>
            <Link to={"/"}>
                <ImgLogo src={orangeIsoLogo} alt="IsoLogo RoutePlanner" />
            </Link>
            {action === "login" ? <SecondaryButton disabled>Login</SecondaryButton> : ''}
        </Nav>
    )
}

export default Navbar;