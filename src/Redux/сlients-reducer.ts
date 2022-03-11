export type ClientsPropsType = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}

type ClientsType = {
    clients: ClientsPropsType[]
    totalCount: number
    countClientsOnLine: number
    page: number
    isFollowed: boolean
}
const initialState: ClientsType = {
    clients: [] as ClientsPropsType[],
    totalCount: 0,
    countClientsOnLine: 10,
    page: 1,
    isFollowed: false,
}
// const ClientsType = typeof initialState

type ActionType = ActionTypeSubscribe | ActionTypeUnSubscribe | ActionTypeSetClients | ActionTypeUpdetePage | ActionTypeSetTotalCountAC | ActionTypeUpdetePreloadAC


export const clientsReducer = (state = initialState, action: ActionType): ClientsType => {
    switch (action.type) {
        case "UPDETE-SUBSCRIBE":
            return {...state, clients: state.clients.map(m => m.id == action.idClients ? {...m,followed: true} : m)}
        case "UPDETE-UN-SUBSCRIBE":
            return {...state, clients: state.clients.map(m => m.id === action.idClients ? {...m,followed: false} : m)}
        case "SET-CLIENTS":
            return {...state, clients: action.users}
        case "UPDETE-PAGE":
            return {...state,page: action.page}
        case "SET-TOTAL-COUNT":
            return {...state,totalCount: action.count}
        case "UPDETE-PRELOAD":
            return{
                ...state,
                isFollowed: action.isFollowed
            }
        default:
            return state

    }
}


export const subscribeClient = (id: number) => {
    return {
        type: "UPDETE-SUBSCRIBE",
        idClients: id
    }as const
}

export const unSubscribeClient = (id: number) => {
    return {
        type: "UPDETE-UN-SUBSCRIBE",
        idClients: id
    }as const
}

export const setClients = ( users: ClientsPropsType[]) => {
    return {
        type: "SET-CLIENTS",
        users: users
    }as const
}
export const updetePage = ( m: number) => {
    return {
        type: "UPDETE-PAGE",
        page: m
    }as const
}
export const setTotatCount = ( count: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        count
    }as const
}
export const updetePreload = ( isFollowed: boolean) => {
    return {
        type: "UPDETE-PRELOAD",
        isFollowed
    }as const
}

type ActionTypeUpdetePage = ReturnType<typeof updetePage>
type ActionTypeSubscribe = ReturnType<typeof subscribeClient>
type ActionTypeUnSubscribe = ReturnType<typeof unSubscribeClient>
type ActionTypeSetClients = ReturnType<typeof setClients>
type ActionTypeSetTotalCountAC = ReturnType<typeof setTotatCount>
type ActionTypeUpdetePreloadAC = ReturnType<typeof updetePreload>