import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom';
import Zakaz from './Components/content/Zakaz/Zakaz';
import Comp from './Components/content/Comp/Comp';
import DialogsContainer from './Components/content/Dialogs/DialogsContainer';
import {ProfilConteiner} from "./Components/content/Profil/ProfilConteiner";
import {СlientsConteiner} from "./Components/content/Clients/СlientsConteiner";


// props: StateType
function App() {


    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <div className='content'>
                <Routes>
                    <Route path="/profil" element={<ProfilConteiner/>}/>
                    <Route path="/dialogs" element={<DialogsContainer/>}/>
                    <Route path="/klients" element={<СlientsConteiner/>}/>
                    <Route path="/zakaz" element={<Zakaz/>}/>
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