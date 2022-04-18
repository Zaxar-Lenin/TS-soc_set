import {Dispatch} from "redux";
import {apiDal} from "../Dal/api";

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
    expectationArr: number[]
}
const initialState: ClientsType = {
    clients: [] as ClientsPropsType[],
    totalCount: 0,
    countClientsOnLine: 10,
    page: 1,
    isFollowed: false,
    expectationArr: []
}
// const ClientsType = typeof initialState

export type ActionClientsType = ActionTypeSubscribe
    | ActionTypeUnSubscribe
    | ActionTypeSetClients
    | ActionTypeUpdetePage
    | ActionTypeSetTotalCountAC
    | ActionTypeUpdetePreloadAC
    | ActionTypeSetExpectationArr


export const clientsReducer = (state = initialState, action: ActionClientsType): ClientsType => {
    switch (action.type) {
        case "UPDETE-SUBSCRIBE":
            return {...state, clients: state.clients.map(m => m.id == action.idClients ? {...m, followed: true} : m)}
        case "UPDETE-UN-SUBSCRIBE":
            return {...state, clients: state.clients.map(m => m.id === action.idClients ? {...m, followed: false} : m)}
        case "SET-CLIENTS":
            return {...state, clients: action.users}
        case "UPDETE-PAGE":
            return {...state, page: action.page}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.count}
        case "UPDETE-PRELOAD":
            return {
                ...state,
                isFollowed: action.isFollowed
            }
        case "SET-EXPECTATION-ARR":
            return {
                ...state,
                expectationArr: action.value
                    ? [...state.expectationArr,action.id]
                    : state.expectationArr.filter(f => f !== action.id)
            }
        default:
            return state

    }
}


export const subscribe = (id: number) => {
    return {
        type: "UPDETE-SUBSCRIBE",
        idClients: id
    } as const
}

export const unSubscribe = (id: number) => {
    return {
        type: "UPDETE-UN-SUBSCRIBE",
        idClients: id
    } as const
}

export const setClients = (users: ClientsPropsType[]) => {
    return {
        type: "SET-CLIENTS",
        users: users
    } as const
}
export const updetePage = (m: number) => {
    return {
        type: "UPDETE-PAGE",
        page: m
    } as const
}
export const setTotatCount = (count: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        count
    } as const
}
export const updetePreload = (isFollowed: boolean) => {
    return {
        type: "UPDETE-PRELOAD",
        isFollowed,
    } as const
}
export const setExpectationArr = (value: boolean, id: number) => {
    return {
        type: "SET-EXPECTATION-ARR",
        value,
        id,
    } as const
}

type ActionTypeUpdetePage = ReturnType<typeof updetePage>
type ActionTypeSubscribe = ReturnType<typeof subscribe>
type ActionTypeUnSubscribe = ReturnType<typeof unSubscribe>
type ActionTypeSetClients = ReturnType<typeof setClients>
type ActionTypeSetTotalCountAC = ReturnType<typeof setTotatCount>
type ActionTypeUpdetePreloadAC = ReturnType<typeof updetePreload>
type ActionTypeSetExpectationArr = ReturnType<typeof setExpectationArr>



export const unSubscribeClient = (id: number) => (dispatch: Dispatch) => {
    dispatch(setExpectationArr(true, id))
    apiDal.deleteFollowed(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(unSubscribe(id))
        }
        dispatch(setExpectationArr(false, id))

    })
}
export const subscribeClient = (id: number) => (dispatch: Dispatch) => {
    dispatch(setExpectationArr(true, id))
    apiDal.postFollowed(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(subscribe(id))
        }
        dispatch(setExpectationArr(false, id))

    })
}
export const setClientsTC = (page: number,countClientsOnLine: number) => (dispatch: Dispatch) => {
    dispatch(updetePreload(true))
    apiDal.getUser(page, countClientsOnLine).then(data => {
        dispatch(updetePreload(false))
        dispatch(setClients(data.items))
        dispatch(setTotatCount(data.totalCount))
    })
}
export const setPageUsers = (page: number,countClientsOnLine: number) => (dispatch: Dispatch) => {
    dispatch(updetePreload(true))
    dispatch(updetePage(page))
    apiDal.getUserInPage(page, countClientsOnLine).then(data => {
        dispatch(updetePreload(false))
        dispatch(setClients(data.items))
    })
}