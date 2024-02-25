import { NewCompanyForm } from "../../components/Form/Form.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import * as S from "./HomeStyled.js";

const Home = () => {
    return (
        <S.HomePage id="home-page" >
            <Navbar action="Login" />
            <S.Main>
                <S.Text>
                    A sua solução completa para otimização de rotas de entrega. Nossa plataforma intuitiva oferece ferramentas poderosas para planejar, monitorar e otimizar suas rotas, economizando tempo e recursos valiosos.
                </S.Text>
                <NewCompanyForm
                    title="Cadastre sua empresa"
                    onChange={''}
                    onSubmit={''}
                    inputError={''}
                />
            </S.Main>
        </S.HomePage>
    )
}

export default Home;
