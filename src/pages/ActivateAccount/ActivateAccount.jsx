import { useLocation } from "react-router";
import * as S from "./ActivateAccountStyled";
import Navbar from "../../components/Navbar/Navbar";
import { ActivateAccountForm } from "../../components/Form/Form";

const ActivateAccount = () => {
    const location = useLocation();

    const infos = location.state;

    return (
        <S.ActivateAccountPage id="ActivateAccount-page">
            <Navbar action="none" />
            <S.Main>
                <S.Text>{infos.result}</S.Text>
                <ActivateAccountForm
                    title="Informe o código para ativar sua conta"
                />
            </S.Main>
        </S.ActivateAccountPage>
    )
}

export default ActivateAccount;