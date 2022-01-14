import React from "react";

type ReaactProps = {
    value: number;
}
const Reaact = (props: ReaactProps) => {
    if(props.value == 1){
        return (
            <div>
                <Start selected = {true}/>
                <Start selected = {false}/>
                <Start selected = {false}/>
                <Start selected = {false}/>
                <Start selected = {false}/>
            </div>
        );
    }else if(props.value == 2){
        return (
            <div>
                <Start selected = {true}/>
                <Start selected = {true}/>
                <Start selected = {false}/>
                <Start selected = {false}/>
                <Start selected = {false}/>
            </div>
        );
    }else if(props.value == 3){
        return (
            <div>
                <Start selected = {true}/>
                <Start selected = {true}/>
                <Start selected = {true}/>
                <Start selected = {false}/>
                <Start selected = {false}/>
            </div>
        );
    }else if(props.value == 4){
        return (
            <div>
                <Start selected = {true}/>
                <Start selected = {true}/>
                <Start selected = {true}/>
                <Start selected = {true}/>
                <Start selected = {false}/>
            </div>
        );
    }else if(props.value == 5){
        return (
            <div>
                <Start selected = {true}/>
                <Start selected = {true}/>
                <Start selected = {true}/>
                <Start selected = {true}/>
                <Start selected = {true}/>
            </div>
        );
    }
    return (
            <div>
                <Start selected = {false}/>
                <Start selected = {false}/>
                <Start selected = {false}/>
                <Start selected = {false}/>
                <Start selected = {false}/>
            </div>
        );
   
}
type StartProps = {
    selected: boolean;
}
const Start = (props: StartProps) => {
     if(props.selected == true){
        return <div><b>Umi</b></div>
      }else return <div>Umi</div>
}

export default Reaact;