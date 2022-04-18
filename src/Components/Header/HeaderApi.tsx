import React from 'react';
import Header from "./Header";
import {AuthType} from "../../Redux/auth-reducer";


type HeaderApiType = {
    authDate: AuthType,
    authLogOutUserInProfile: () => void
}

class HeaderApi extends React.Component<HeaderApiType, any> {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

export default HeaderApi;