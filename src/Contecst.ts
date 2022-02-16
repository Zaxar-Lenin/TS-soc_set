import React from "react";
import {StoreType} from "./Redux/redux-store";

export const MyContext = React.createContext({} as StoreType)


// type ProvaiderType = {
//     store: StoreType
//     children: React.ReactNode
// }

// export const Provaider = (props: ProvaiderType) => {
//     return <MyContext.Provider value = {props.store}>
//         {props.children}
//     </MyContext.Provider>
// }

