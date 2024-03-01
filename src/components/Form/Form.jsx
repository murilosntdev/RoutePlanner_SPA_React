import { NwCmpnFrm, ActvtAccntFrm, Lgnd, FldSt } from "./FormStyled"
import { FormField } from "../Div/Div"
import { SecondaryButton } from "../Button/Button"

export const NewCompanyForm = (props) => {
    return (
        <NwCmpnFrm onSubmit={props.onSubmit}>
            <Lgnd>{props.title}</Lgnd>
            <FldSt>
                <FormField
                    nameId="name"
                    lText="Nome"
                    type="text"
                    spellCheck="false"
                    required
                    onChange={props.onChange}
                    hasError={props.inputError.name.active}
                    errorText={props.inputError.name.message}
                />
                <FormField
                    nameId="cnpj"
                    lText="CNPJ"
                    type="number"
                    min="0"
                    required
                    onChange={props.onChange}
                    hasError={props.inputError.cnpj.active}
                    errorText={props.inputError.cnpj.message}
                />
                <FormField
                    nameId="email"
                    lText="Email"
                    type="email"
                    placeholder="exemplo@email.com"
                    required
                    onChange={props.onChange}
                    hasError={props.inputError.email.active}
                    errorText={props.inputError.email.message}
                />
                <FormField
                    nameId="password"
                    lText="Senha"
                    type="password"
                    required
                    onChange={props.onChange}
                    hasError={props.inputError.password.active}
                    errorText={props.inputError.password.message}
                />
                <FormField
                    nameId="confirmPassword"
                    lText="Confirme a senha"
                    type="password"
                    required
                    onChange={props.onChange}
                    hasError={props.inputError.confirmPassword.active}
                    errorText={props.inputError.confirmPassword.message}
                />
            </FldSt>
            <SecondaryButton loading={props.loading}>Cadastrar Empresa</SecondaryButton>
        </NwCmpnFrm>
    )
}

export const ActivateAccountForm = (props) => {
    return (
        <ActvtAccntFrm onSubmit={props.onSubmit}>
            <Lgnd>{props.title}</Lgnd>
            <FldSt>
                <FormField
                    nameId="authCode"
                    type="text"
                    spellCheck="false"
                    placeholder="_ _ _ _ _ _"
                    align="center"
                    required
                    onChange={props.onChange}
                    hasError={props.inputError.authCode.active}
                    errorText={props.inputError.authCode.message}
                />
            </FldSt>
            <SecondaryButton loading={props.loading}>Validar Código</SecondaryButton>
        </ActvtAccntFrm>
    )
}