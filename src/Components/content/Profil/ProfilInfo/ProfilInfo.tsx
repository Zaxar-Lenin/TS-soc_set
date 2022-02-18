import React from 'react';
import s from './ProfilInfo.module.css'

type ProfilInfoType = {
    onAddText: () => void
    onChangeUpdateValue: (text: string) => void
    messange: string
}

const ProfilInfo = (props: ProfilInfoType) => {

    const refTeaxt = React.createRef<HTMLTextAreaElement>()


    const addText = () => {
        props.onAddText()

    }

    const updateValue = () => {
        if (refTeaxt.current) {
            const text = refTeaxt.current.value
            props.onChangeUpdateValue(text)
        }
    }

    return (
        <div>
            <div><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpZIYpH-kndwt4nJ8K0PJ_rVD6Qh6rR42Rg&usqp=CAU"
                alt="" className={s.image}/></div>
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
                <textarea ref={refTeaxt} onChange={updateValue} value={props.messange}></textarea>
                <button onClick={addText}>OK</button>
            </div>

        </div>
    );
}

export default ProfilInfo;