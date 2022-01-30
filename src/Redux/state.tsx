import { MassengTextType, MyPostType } from "../App"
// import Masseng from "../Components/content/Dialogs/Masseng/Masseng"

let renderState = () => {
  console.log("start")
}

export let state = {
  DialogsData: [
    { id: 1, name: "Viki" },
    { id: 2, name: "Sergey" },
    { id: 3, name: "Pasha" },
    { id: 4, name: "Maik" },
    { id: 5, name: "Mikal" },
    { id: 6, name: "Maik" },
    { id: 7, name: "Sergey" },
    { id: 8, name: "Seva" },
    { id: 9, name: "Pasha" },
    { id: 10, name: "Mikal" },
    { id: 11, name: "Sergey" }

  ],
  MassengsData: [
    {
      id: 1, name: "Viki:", massengs: [
        { id: 1, masseng: "This page provides various texts in English for reading.Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary" },
        { id: 2, masseng: "This page provides various texts in English for reading.Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary" }
      ]
    },
    // {id: 2, name: "Sergey:", text: "This page provides various texts in English for reading. Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"},
    // {id: 3, name: "Pasha:", text: "This page provides various texts in English for reading. Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"},
    // {id: 4, name: "Maik:", text: "This page provides various texts in English for reading. Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"},
    // {id: 5, name: "Mikal:", text: "This page provides various texts in English for reading. Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"},
    // {id: 6, name: "Maik:", text: "This page provides various texts in English for reading. Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"},
    // {id: 7, name: "Sergey:", text: "This page provides various texts in English for reading. Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"},
    // {id: 8, name: "Seva:", text: "This page provides various texts in English for reading. Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"},
    // {id: 9, name: "Pasha:", text: "This page provides various texts in English for reading. Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"},
    // {id: 10, name: "Mikal:", text: "This page provides various texts in English for reading. Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"},
    // {id: 11, name: "Sergey:", text: "This page provides various texts in English for reading. Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"}

  ],
  MyPosts: [
    { id: 1, title: "ByBeldrus", coment: 545, like: 23 },
    { id: 2, title: "ByBeldrus", coment: 484, like: 23 },
    { id: 3, title: "ByBeldrus", coment: 54, like: 23 },
    { id: 4, title: "ByBeldrus", coment: 54, like: 23 },
    { id: 5, title: "ByBeldrus", coment: 788, like: 23 },
    { id: 6, title: "ByBeldrus", coment: 519, like: 23 },
    { id: 7, title: "ByBeldrus", coment: 95, like: 23 },
    { id: 8, title: "ByBeldrus", coment: 39, like: 23 },
    { id: 9, title: "ByBeldrus", coment: 158, like: 23 },
    { id: 10, title: "ByBeldrus", coment: 962, like: 23 },
    { id: 11, title: "ByBeldrus", coment: 2, like: 23 }
  ],
  musor: {
    text: "",
    masseng: ""
  }
}

export const addUsers = () => {
  const newUser: MyPostType = {
    id: 12,
    title: state.musor.text,
    coment: 2,
    like: 23
  }
  state.MyPosts.push(newUser)
  renderState()
  updateValueText("")
}

export const updateValueText = (text: string) => {
  state.musor.text = text
  renderState()
}


export const addMasseng = () => {
  const newMasseng: MassengTextType = {
    id: 3,
    masseng: state.musor.masseng
  }
  state.MassengsData[0].massengs.push(newMasseng)
  renderState()
  updateValueMasseng("")
}

export const updateValueMasseng = (text: string) => {
  state.musor.masseng = text
  renderState()
}


export const subscripe = (observer: () => void) => {
  renderState = observer
}


