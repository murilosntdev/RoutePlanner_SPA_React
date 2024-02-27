import { Frm, Lgnd, FldSt } from "./FormStyled"
import { FormField } from "../Div/Div"
import { SecondaryButton } from "../Button/Button"

export const NewCompanyForm = (props) => {
    return (
        <Frm onSubmit={props.onSubmit}>
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
            <SecondaryButton>Cadastrar Empresa</SecondaryButton>
        </Frm>
    )
}