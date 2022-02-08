import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Profil from './Components/content/Profil/Profil';
import Dialogs from './Components/content/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Zakaz from './Components/content/Zakaz/Zakaz';
import Klients from './Components/content/Klients/Klients';
import Comp from './Components/content/Comp/Comp';
import {StateType} from "./Types/Types";



function App(props: StateType) {


    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <div className='content'>
                    <Routes>
                        <Route path="/profil" element={<Profil MyPosts={props.state.profilPages.MyPosts}
                            // updateValueText={props.updateValueText}
                                                               masseng={props.state.profilPages.text}
                                                               dispatсh={props.dispatсh}/>}/>
                        <Route path="/dialogs" element={<Dialogs dispatсh={props.dispatсh}
                            // updateValueMasseng ={props.updateValueMasseng}
                                                                 masseng={props.state.dialogsPages.masseng}
                                                                 MassengsData={props.state.dialogsPages.MassengsData}
                                                                 DialogsData={props.state.dialogsPages.DialogsData}/>}/>
                        <Route path="/zakaz" element={<Zakaz/>}/>
                        <Route path="/klients" element={<Klients/>}/>
                        <Route path="/comp" element={<Comp/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
