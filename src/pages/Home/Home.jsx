import { useState } from "react";
import { NewCompanyForm } from "../../components/Form/Form.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import * as S from "./HomeStyled.js";
import api from "../../services/api.js";
import translateInputName from "../../services/inputNameTranslator.js";
import { Popup } from "../../components/Popup/Popup.jsx";

const Home = () => {
    const [newCompanyFormData, setNewCompanyFormData] = useState({
        name: '',
        cnpj: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [inputsErrors, setInputsErrors] = useState({
        name: { active: false, message: '' },
        cnpj: { active: false, message: '' },
        email: { active: false, message: '' },
        password: { active: false, message: '' },
        confirmPassword: { active: false, message: '' }
    });
    const [popupIsOpen, setPopupIsOpen] = useState(false);
    const [popupInfos, setPopupInfos] = useState({
        type: '',
        content: ''
    });

    function handleNewCompanyFormInputChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setNewCompanyFormData({ ...newCompanyFormData, [inputName]: inputValue });
    }

    async function handleNewCompanyFormSubmit(event) {
        event.preventDefault();

        const { name, cnpj, email, password, confirmPassword } = newCompanyFormData;

        setInputsErrors({
            name: {},
            cnpj: {},
            email: {},
            password: {},
            confirmPassword: {}
        })

        if (password !== confirmPassword) {
            showDifferentPasswordError();
            return;
        }

        const data = {
            name,
            cnpj,
            email,
            password
        }

        try {
            await api.post('account/newCompany', data).then(response => {
                console.log('criacao 200');/////
            })
        } catch (error) {
            const status = error.response.data.error.status;
            const details = error.response.data.error.details;

            switch (status) {
                case 422: {
                    showInputErrors(details);
                    break;
                };
                default: {
                    setPopupInfos({type:"danger", content:`Não foi possível concluir o cadastro de sua conta. Por favor, tente novamente mais tarde`});
                    togglePopup(true);
                    break;
                }
            }
        }
    }

    function showDifferentPasswordError() {
        const updatedInputsErrors = {
            name: { active: false, message: '' },
            cnpj: { active: false, message: '' },
            email: { active: false, message: '' },
            password: { active: true, message: '' },
            confirmPassword: { active: true, message: 'As senhas devem ser iguais' }
        }

        setInputsErrors(updatedInputsErrors);
    }

    function showInputErrors(details) {
        const updatedInputsErrors = {
            name: { active: false, message: '' },
            cnpj: { active: false, message: '' },
            email: { active: false, message: '' },
            password: { active: false, message: '' },
            confirmPassword: { active: false, message: '' }
        }

        details.forEach(detail => {
            Object.entries(detail).forEach(([key, value]) => {
                if (key === 'name') {
                    updatedInputsErrors[key] = { ...updatedInputsErrors[key], active: true, message: translateInputName(value, 'name', 'nome') };
                };
                if (key === 'cnpj') {
                    updatedInputsErrors[key] = { ...updatedInputsErrors[key], active: true, message: translateInputName(value, 'cnpj', 'CNPJ') };
                };
                if (key === 'email') {
                    updatedInputsErrors[key] = { ...updatedInputsErrors[key], active: true, message: value };
                };
                if (key === 'password') {
                    updatedInputsErrors[key] = { ...updatedInputsErrors[key], active: true, message: translateInputName(value, 'password', 'senha') };
                };

                setInputsErrors(updatedInputsErrors);
            });
        });
    }

    function togglePopup(newState) {
        setPopupIsOpen(newState);

        const timeout = setTimeout(() => {
            setPopupIsOpen(false);
        }, 5000);
        return () => clearTimeout(timeout);
    }

    return (
        <S.HomePage id="home-page" >
            <Navbar action="Login" />
            <Popup
                isOpen={popupIsOpen}
                type={popupInfos.type}
            >
                {popupInfos.content}
            </Popup>
            <S.Main>
                <S.Text>
                    A sua solução completa para otimização de rotas de entrega. Nossa plataforma intuitiva oferece ferramentas poderosas para planejar, monitorar e otimizar suas rotas, economizando tempo e recursos valiosos.
                </S.Text>
                <NewCompanyForm
                    title="Cadastre sua empresa"
                    onChange={handleNewCompanyFormInputChange}
                    onSubmit={handleNewCompanyFormSubmit}
                    inputError={inputsErrors}
                />
            </S.Main>
        </S.HomePage>
    )
}

export default Home;
