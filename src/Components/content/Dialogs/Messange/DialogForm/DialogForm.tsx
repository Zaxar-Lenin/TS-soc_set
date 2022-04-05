import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {DialogFormType} from "../Messange";
import {TextArea} from "../../../Profil/ProfilForm/TextArea";
import {maxLength, required} from "../../../../../until/validators";

const max = maxLength(50)

const DialogPost = (props: InjectedFormProps<DialogFormType>) => {

    return <form onSubmit={props.handleSubmit} >
        <div>
            <Field validate ={[required,max]} placeholder = {"your message"} component = {TextArea} name={'myMessage'} />
        </div>
        <div>
            <button>Ok</button>
        </div>
    </form>
}

export const DialogForm =  reduxForm<DialogFormType>({
    form: "dialogForm"
})(DialogPost)