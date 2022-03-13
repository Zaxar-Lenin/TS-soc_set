import React from 'react';
import s from './ProfilInfo.module.css'
import {ProfilUserType} from "../../../../Redux/profil-reducer";
import Preloader from "../../../Common/Preloader";

type ProfilInfoType = {
    addText: () => void
    upDateValueText: (text: string) => void
    messange: string
    profilUser: ProfilUserType
    isUser: boolean

}

const ProfilInf = (props: ProfilInfoType) => {


    const refTeaxt = React.createRef<HTMLTextAreaElement>()


    const addText = () => {
        props.addText()

    }

    const updateValue = () => {
        if (refTeaxt.current) {
            const text = refTeaxt.current.value
            props.upDateValueText(text)
        }
    }
    // props.isUrer ? console.log(props.profilUser.photos.small) : console.log("xep")
    return (
        <div>
            <div><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpZIYpH-kndwt4nJ8K0PJ_rVD6Qh6rR42Rg&usqp=CAU"
                alt="" className={s.image}/></div>
            <h3 className={s.title}>My Name Zaxar</h3>
            <div>
                Profil:
                <div style={{margin: "10px 0 10px 20px"}}>
                    <div>{
                        props.isUser ? <img src={props.profilUser.photos.large} alt=""/> : <Preloader/>
                    }
                    </div>
                    <div>
                        обо мне: <span>{props.profilUser.aboutMe}</span>
                    </div>
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
            </div>
            <div className={s.text}>
                <textarea ref={refTeaxt} onChange={updateValue} value={props.messange}></textarea>
                <button onClick={addText}>OK</button>
            </div>

        </div>
    );
}

const ProfilInfo = React.memo(ProfilInf)

export default ProfilInfo;