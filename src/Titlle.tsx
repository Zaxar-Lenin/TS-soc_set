import React from "react";


type TitlleProps = {
    title: string;
}
const Titlle = (props: TitlleProps) => {
    return <h1>{props.title}</h1>
}

export default Titlle;