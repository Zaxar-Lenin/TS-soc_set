export type СlientsPropsType = {
    id: number
    foto: string
    subscribe: boolean
    intelligence: string
    location: {
        country: string
        city: string
    }
}
const initialState: { сlients: СlientsPropsType[] } = {
    сlients: [
    //     {
    //         id: 1,
    //         foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNEezIgTXhB9_OTZCAicRofN62-_pH5z2NiHa_nA2s492NU8NFymAbTpMbNm0NLeLtJw&usqp=CAU",
    //         subscribe: true,
    //         intelligence: "I like write code",
    //         location: {country: "Belarus", city: "Minsk"}
    //     },
    //     {
    //         id: 2,
    //         foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNEezIgTXhB9_OTZCAicRofN62-_pH5z2NiHa_nA2s492NU8NFymAbTpMbNm0NLeLtJw&usqp=CAU",
    //         subscribe: true,
    //         intelligence: "I like write code",
    //         location: {country: "Belarus", city: "Minsk"}
    //     },
    //     {
    //         id: 3,
    //         foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNEezIgTXhB9_OTZCAicRofN62-_pH5z2NiHa_nA2s492NU8NFymAbTpMbNm0NLeLtJw&usqp=CAU",
    //         subscribe: true,
    //         intelligence: "I like write code",
    //         location: {country: "Belarus", city: "Minsk"}
    //     }
     ]

}


type ActionType = ActionTypeSubscribe | ActionTypeUnSubscribe | ActionTypeSetClients


export const сlientsReducer = (state = initialState, action: ActionType): { сlients: СlientsPropsType[] } => {
    switch (action.type) {
        case "UPDETE-SUBSCRIBE":
            return {...state, сlients: state.сlients.map(m => m.id == action.idClients ? {...m,subscribe: true} : m)}
        case "UPDETE-UN-SUBSCRIBE":
            return {...state, сlients: state.сlients.map(m => m.id === action.idClients ? {...m,subscribe: false} : m)}
        case "SET-CLIENTS":
            return {...state, сlients: [...state.сlients,...action.users]}
        default:
            return state

    }
}


export const subscribeClientAC = (id: number) => {
    return {
        type: "UPDETE-SUBSCRIBE",
        idClients: id
    }as const
}

export const unSubscribeClientAC = (id: number) => {
    return {
        type: "UPDETE-UN-SUBSCRIBE",
        idClients: id
    }as const
}

export const setClientsAC = ( users: СlientsPropsType[]) => {
    return {
        type: "SET-CLIENTS",
        users: users
    }as const
}


type ActionTypeSubscribe = ReturnType<typeof subscribeClientAC>
type ActionTypeUnSubscribe = ReturnType<typeof unSubscribeClientAC>
type ActionTypeSetClients = ReturnType<typeof setClientsAC>