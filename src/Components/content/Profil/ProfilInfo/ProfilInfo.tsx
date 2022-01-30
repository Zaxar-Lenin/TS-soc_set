import React, { RefObject } from 'react';
import s from './ProfilInfo.module.css'

type ProfilInfoType = {
    addUsers: () => void
    updateValueText: (text: string) => void;
    masseng: string
}

const ProfilInfo = (props: ProfilInfoType) => {

    const refTeaxt = React.createRef<HTMLTextAreaElement>()


    const addText = () => {
            props.addUsers()
    
    }

    const updateValue = () => {
        if (refTeaxt.current) {
            const text = refTeaxt.current.value
            props.updateValueText(text)
        }
    }

    return (
        <div >
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpZIYpH-kndwt4nJ8K0PJ_rVD6Qh6rR42Rg&usqp=CAU" alt="" className={s.image} /></div>
            <h3 className={s.title}>My Name Zaxar</h3>
            <div>
                My hobis:
                <ul className={s.items}>
                    <li className={s.item}>footbal</li>
                    <li className={s.item}>footbal</li>
                    <li className={s.item}>footbal</li>
                    <li className={s.item}>footbal</li>
                </ul>
            </div>
            <div className={s.text}>
                <textarea ref={refTeaxt} onChange={updateValue} value = {props.masseng}></textarea>
                <button onClick={addText}>OK</button>
            </div>

        </div>
    );
}

export default ProfilInfo;