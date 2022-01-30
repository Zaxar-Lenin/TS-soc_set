import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Profil from './Components/content/Profil/Profil';
import Dialogs from './Components/content/Dialogs/Dialogs';
import { DialogType, MassengType } from './Components/content/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Zakaz from './Components/content/Zakaz/Zakaz';
import Klients from './Components/content/Klients/Klients';
import Comp from './Components/content/Comp/Comp';


export type MyPostType = {
  id: number
  title: string
  coment: number
  like: number
}
export type MassengTextType = {
  id: number
  masseng: string
}

export type ArrMyPostType = {
  MyPosts: Array<MyPostType>
  addUsers: () => void;
  updateValueText: (text: string) => void;
  masseng: string
}
export type MusorType =  {
  text: string
  masseng: string
}
export type all = {
  MyPosts: Array<MyPostType>
  DialogsData: Array<DialogType>
  MassengsData: Array<MassengType>
  musor: MusorType
}

export type StateType = {
  state: all
  addUsers: () => void;
  updateValueText: (text: string) => void;
  addMasseng: () => void;
  updateValueMasseng: (text: string) => void;
}

function App(props: StateType) {


  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path="/profil" element={<Profil MyPosts={props.state.MyPosts}
                                  updateValueText={props.updateValueText}
                                  masseng={props.state.musor.text}
                                  addUsers={props.addUsers} />} />
            <Route path="/dialogs" element={<Dialogs  addMasseng = {props.addMasseng}
                                                      updateValueMasseng ={props.updateValueMasseng}
                                                      masseng={props.state.musor.masseng}
                                                      MassengsData={props.state.MassengsData}
                                                      DialogsData={props.state.DialogsData} />} />
            <Route path="/zakaz" element={<Zakaz />} />
            <Route path="/klients" element={<Klients />} />
            <Route path="/comp" element={<Comp />} />
          </Routes>
        </div >
      </div>
    </BrowserRouter>
  );
}

export default App;
