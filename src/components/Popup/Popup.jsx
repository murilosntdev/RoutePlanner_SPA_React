import { LoadingBar } from "../Loading/Loading";
import { Pppdv, PppSpn } from "./PopupStyled"


export const Popup = (props) => {
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