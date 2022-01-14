import React from 'react';


type AcordionProps = {
    title: string
    collabsed: boolean
}
const Acordion = (props: AcordionProps) => {
    
    if(props.collabsed == true){
        return (<>
                    <AcordionTitle title = {props.title} />
                    <AcordionBody />
                </>);
    }
    return ( <>
                <AcordionTitle title = {props.title} />
            </>);
}
type AcordionTitleProps = {
    title: string;
}
const AcordionTitle = (props: AcordionTitleProps) => {
    return <h2>{props.title}</h2>
}

const AcordionBody = () => {
    return (<ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>);
}


export default Acordion;