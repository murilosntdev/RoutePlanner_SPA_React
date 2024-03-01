import { useLocation } from "react-router";

const ActivateAccount = () => {
    const location = useLocation();

    const infos = location.state;

    console.log(infos);////////////

    return (<p>Ativação de conta</p>)
}

export default ActivateAccount;