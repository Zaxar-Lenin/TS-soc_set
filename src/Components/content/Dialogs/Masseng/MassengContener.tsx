import React from "react";
import {MassengType} from "../Dialogs";
import {addMassengActionCreator, upDateValueMassengActionCreator} from "../../../../Redux/profil-reducer";
import Masseng from "./Masseng";
import {MyContext} from "../../../../Contecst";


// type MassengTypeWithFunc = MassengType & {
//     dispatсh: (action: ActionType) => void;
//     masseng: string
// }
type MassengTypeWithFunc = MassengType

const MassengContener = (props: MassengTypeWithFunc) => {
    // const textAreaEl: RefObject<HTMLTextAreaElement> = React.createRef()


    return <MyContext.Consumer>
        { store => {
            const onAddMasseng = () => {
                store.dispatch(addMassengActionCreator())
            }

            const onChangeValueOn = (text: string) => {
                store.dispatch(upDateValueMassengActionCreator(text))
            }

            return <Masseng id={props.id}
                     massengs={props.massengs}
                     name={props.name}
                     masseng={store.getState().dialogsPages.masseng}
                     onAddMasseng={onAddMasseng}
                     onChangeValueOn={onChangeValueOn}/>
        }}
    </MyContext.Consumer>

}

export default MassengContener