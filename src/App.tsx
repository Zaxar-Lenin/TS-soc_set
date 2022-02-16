import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Profil from './Components/content/Profil/Profil';
import Dialogs from './Components/content/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import Zakaz from './Components/content/Zakaz/Zakaz';
import Klients from './Components/content/Klients/Klients';
import Comp from './Components/content/Comp/Comp';
import {MyContext} from "./Contecst";


// props: StateType
function App() {


    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <div className='content'>
                <Routes>
                    <Route path="/profil" element={
                        <MyContext.Consumer>
                            { store => (
                                <Profil MyPosts={store.getState().profilPages.MyPosts}/>
                            )
                            }
                        </MyContext.Consumer>}/>
                    <Route path="/dialogs" element={
                        <MyContext.Consumer>
                        { store => {
                            return (<Dialogs DialogsData = {store.getState().dialogsPages.DialogsData}
                                             MassengsData = {store.getState().dialogsPages.MassengsData}/>)
                        }
                        }
                        </MyContext.Consumer>}/>
                    <Route path="/zakaz" element={<Zakaz/>}/>
                    <Route path="/klients" element={<Klients/>}/>
                    <Route path="/comp" element={<Comp/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;


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