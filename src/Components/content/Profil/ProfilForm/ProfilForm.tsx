import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {FormPostType} from "../ProfilInfo/ProfilInfo";
import {TextArea} from "./TextArea";
import {maxLength, required} from "../../../../until/validators";


const max = maxLength(10)

const ProfilPost = (props: InjectedFormProps<FormPostType>) => {
    return <form onSubmit={props.handleSubmit} >
        <div>
            <Field validate = {[required,max]} placeholder = {"my-post"} component = {TextArea} name={'myPost'} />
        </div>
        <div>
            <button>Ok</button>
        </div>
    </form>
}

export const ProfilForm =  reduxForm<FormPostType>({
    form: "profilPost"
})(ProfilPost)