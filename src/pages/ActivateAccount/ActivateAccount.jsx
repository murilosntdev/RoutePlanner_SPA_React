import { useLocation } from "react-router";
import * as S from "./ActivateAccountStyled";
import Navbar from "../../components/Navbar/Navbar";
import { ActivateAccountForm } from "../../components/Form/Form";
import { useState } from "react";
import api from "../../services/api";
import translateInputName from "../../services/inputNameTranslator";

const ActivateAccount = () => {
    const location = useLocation();
    const infos = location.state;

    const [activateAccountFormData, setActivateAccountFormData] = useState({
        authCode: ''
    });
    const [buttonLoading, setButtonLoading] = useState(false);
    const [inputErrors, setInputErrors] = useState({
        authCode: { active: false, message: '' }
    });

    function handleActivateAccountFormInputChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setActivateAccountFormData({ ...activateAccountFormData, [inputName]: inputValue });
    }

    async function handleActivateAccountFormSubmit(event) {
        event.preventDefault();

        const { authCode } = activateAccountFormData;

        setInputErrors({
            authCode: {}
        })

        const data = {
            "action": "validate_auth_code",
            "account_type": infos.account_info.type,
            "cpf_cnpj": infos.account_info.cpf_cnpj,
            "auth_code": authCode
        };

        setButtonLoading(true);

        try {
            await api.post('account/activate', data).then(response => {
                console.log('validado');////////
            })
        } catch (error) {
            const status = error.response.data.error.status;
            const details = error.response.data.error.details;

            setButtonLoading(false);

            switch (status) {
                case 422: {
                    showInputErrors(details);
                    break;
                }
            }
        }
    }

    function showInputErrors(details) {
        const updatedInputErrors = {
            authCode: { active: false, message: '' }
        }

        details.forEach(detail => {
            Object.entries(detail).forEach(([key, value]) => {
                if (key === 'auth_code') {
                    updatedInputErrors['authCode'] = { ...updatedInputErrors['authCode'], active: true, message: translateInputName(value, 'auth_code', 'código') };
                };

                setInputErrors(updatedInputErrors);
            });
        });
    }

    return (
        <S.ActivateAccountPage id="ActivateAccount-page">
            <Navbar action="none" />
            <S.Main>
                <S.Text>{infos.result}</S.Text>
                <ActivateAccountForm
                    title="Informe o código para ativar sua conta"
                    onChange={handleActivateAccountFormInputChange}
                    onSubmit={handleActivateAccountFormSubmit}
                    inputError={inputErrors}
                    loading={buttonLoading}
                />
            </S.Main>
        </S.ActivateAccountPage>
    )
}

export default ActivateAccount;