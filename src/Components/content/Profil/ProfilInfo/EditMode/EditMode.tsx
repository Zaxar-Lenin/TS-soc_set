import React, {ChangeEvent} from 'react'

type EditModeType = {
    status: string
    updateUserStatus: (status: string) => void
}
class EditMode extends React.Component<EditModeType, any>{
    state = {
        isEdit: false,
        status: this.props.status
    }

    editHandler(){
        this.setState({
            isEdit: true
        })
    }
    unEditHandler(){
        this.setState({
            isEdit: false
        })
        this.props.updateUserStatus(this.state.status)

    }
    changeHadler(e: ChangeEvent<HTMLInputElement>){
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<EditModeType>, prevState: Readonly<any>) {

        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            <span>обо мне:</span>
            { this.state.isEdit
                ? <div>
                    <input onChange={this.changeHadler.bind(this)} onBlur={this.unEditHandler.bind(this)} autoFocus value = {this.state.status} type="text"/>
                </div>
                : <div>
                     <span onDoubleClick={this.editHandler.bind(this)}>{this.props.status || "----"}</span>
                </div>
            }
        </div>;
    }
}

export default EditMode