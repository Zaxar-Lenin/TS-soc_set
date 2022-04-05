import React, {Component} from "react";
import {Navigate} from "react-router-dom";
import {StateType} from "../Redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.authMe.isAuth
    }
}


export function WithRiderect<T>(Component:  React.ComponentType<T>){

    function ContenerComponent(props: MapStateToPropsType) {
        let {isAuth,...restProps} = props
        if (!isAuth) return <Navigate to="/login"/>
        return <Component {...restProps as T} />;
    }


    return connect(mapStateToProps)(ContenerComponent)
}