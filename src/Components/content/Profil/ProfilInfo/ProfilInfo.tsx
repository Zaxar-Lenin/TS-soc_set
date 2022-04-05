import React from 'react';
import s from './ProfilInfo.module.css'
import {ProfilUserType} from "../../../../Redux/profil-reducer";
import Preloader from "../../../Common/Preloader";
import EditMode from "./EditMode/EditMode";
import {ProfilForm} from "../ProfilForm/ProfilForm";

type ProfilInfoType = {
    addText: (text: string) => void
    profilUser: ProfilUserType
    isUser: boolean
    status: string
    updateUserStatus: (status: string) => void

}

export type FormPostType = {
    myPost : string
}

const ProfilInf = (props: ProfilInfoType) => {




    const onSubmit = (formPost: FormPostType) => {
        props.addText(formPost.myPost)
    }
    // props.isUrer ? console.log(props.profilUser.photos.small) : console.log("xep")
    return (
        <div>
            {/*<div><img*/}
            {/*    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpZIYpH-kndwt4nJ8K0PJ_rVD6Qh6rR42Rg&usqp=CAU"*/}
            {/*    alt="" className={s.image}/></div>*/}

            <h3 className={s.title}>My Name Zaxar</h3>
            <div>
                Profil:
                <div style={{margin: "10px 0 10px 20px"}}>
                    <div>{
                        props.isUser ?
                            <div>
                                <img src={props.profilUser.photos.large} alt=""/>
                                <EditMode updateUserStatus={props.updateUserStatus} status = {props.status}/>
                                <div>
                                    меня зовут: <span>{props.profilUser.fullName}</span>
                                </div>
                                <div>
                                    мой контакты:
                                    <div style={{margin: "0 0 0 10px"}}>
                                        vk : <span>{props.profilUser.contacts.vk}</span><br/>
                                        github : <span>{props.profilUser.contacts.github}</span><br/>
                                        facebook : <span>{props.profilUser.contacts.facebook}</span><br/>
                                        twitter : <span>{props.profilUser.contacts.twitter}</span><br/>
                                    </div>
                                </div>
                            </div>
                            : <Preloader/>
                    }
                    </div>

                </div>
            </div>
            <div className={s.text}>
                <ProfilForm onSubmit = {onSubmit}/>
                {/*<textarea ref={refTeaxt} onChange={updateValue} value={props.messange}></textarea>*/}
                {/*<button onClick={addText}>OK</button>*/}
            </div>

        </div>
    );
}

const ProfilInfo = React.memo(ProfilInf)

export default ProfilInfo;