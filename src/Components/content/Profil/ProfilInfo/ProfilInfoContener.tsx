import React from 'react';
import {ActionType} from "../../../../Types/Types";
import {addTextActionCreator, upDateValueTextActionCreator} from "../../../../Redux/dialogs-reducer";
import ProfilInfo from "./ProfilInfo";
import {MyContext} from '../../../../Contecst';

// type ProfilInfoType = {
//     dispatсh: (action: ActionType) => void
//     masseng: string
// }

const ProfilInfoContener = () => {


    return <MyContext.Consumer>
        {store => {
            const onAddText = () => {
                store.dispatch(addTextActionCreator())

            }

            const onChangeUpdateValue = (text: string) => {
                store.dispatch(upDateValueTextActionCreator(text))
            }
            const masseng = store.getState().profilPages.text
            return (
                <ProfilInfo masseng={masseng} onAddText={onAddText}
                            onChangeUpdateValue={onChangeUpdateValue}/>
            )
        }
        }
    </MyContext.Consumer>
}

export default ProfilInfoContener