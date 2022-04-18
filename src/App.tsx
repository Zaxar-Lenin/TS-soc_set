import React from 'react';
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom';
import Zakaz from './Components/content/Zakaz/Zakaz';
import Comp from './Components/content/Comp/Comp';
import DialogsContainer from './Components/content/Dialogs/DialogsContainer';
import {ProfilConteiner} from "./Components/content/Profil/ProfilConteiner";
import {СlientsConteiner} from './Components/content/Clients/СlientsConteiner';
import {HeaderContener} from "./Components/Header/HeaderContener";
import {LoginContainer} from "./Components/content/Login/LoginContainer";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/app-ruducer";
import {StateType} from "./Redux/redux-store";
import Preloader from "./Components/Common/Preloader";
import tt from "./c/72d3488e-7140-4cf4-8f0c-a8182ea53872 (1).jpg"


class App extends React.Component<any, mapStateToPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
    if(!this.props.initialize){
        return <Preloader/>
    }

        return (
             <div style={{
                 fontSize: "100px",
                 margin: "100px",
                 backgroundColor: "black",
                 color: "white",
                 padding: "20px"
             }}>Нихуя малышечка,
                 Спокойной ночки детка!:)
                 <div><img
                     src={tt}
                     alt=""/></div></div>
            /*<div className="wrapper">
                <HeaderContener/>
                <Sidebar/>
                <div className='content'>
                    <Routes>
                        //@ts-ignore
                        <Route path="/profil/:id" element={<ProfilConteiner/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/klients/*" element={<СlientsConteiner/>}/>
                        <Route path="/zakaz" element={<Zakaz/>}/>
                        <Route path="/comp" element={<Comp/>}/>
                        <Route path="/login" element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>*/
        );
    }
}

type mapStateToPropsType = {
    initialize: boolean
}
const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        initialize: state.app.initialized
    }
}

const AppClass = connect(mapStateToProps,{initializeApp})(App)

export default AppClass;


{/*MyPosts={props.state.profilPages.MyPosts}*/
}
{/*// updateValueText={props.updateValueText}*/
}
{/*masseng={props.state.profilPages.text}*/
}
{/*dispatсh={props.dispatсh}/>}/>*/
}
{/*<Route path="/dialogs" element={<Dialogs dispatсh={props.dispatсh*/
}


{/*// updateValueMasseng ={props.updateValueMasseng}*/
}
{/*masseng={props.state.dialogsPages.masseng}*/
}
{/*MassengsData={props.state.dialogsPages.MassengsData}*/
}
{/*DialogsData={props.state.dialogsPages.DialogsData}/>}*/
}