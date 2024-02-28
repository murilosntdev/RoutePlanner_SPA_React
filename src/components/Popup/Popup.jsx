import { LoadingBar } from "../LoadingBar/LoadingBar";
import { Pppdv, PppSpn } from "./PopupStyled"


export const Popup = (props) => {
    console.log(props);
    return (
        <Pppdv
            isOpen={props.isOpen}
            type={props.type}
        >
            <PppSpn>{props.children}</PppSpn>
            <LoadingBar />
        </Pppdv>
    )
}