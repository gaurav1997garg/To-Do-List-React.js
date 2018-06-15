import React from 'react';
import '../Styles/todoform.css'

export class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleKeyPress=this.handleKeyPress.bind(this);
        this.handleOnClick=this.handleOnClick.bind(this);
    }
    handleChange(e){
        this.setState({value:e.target.value});
    }
    handleKeyPress(e){
        if(e.charCode===13){
            this.props.addItem(this.state.value);
            this.setState({value: ""});
        }
    }
    handleOnClick(e){
        this.props.addItem(this.state.value);
        this.setState({value: ""});
    }
   
    render(){
        return (
            <div className="myForm">TASK :<nbsb> </nbsb> 
                <input type="text" value={this.state.value} onChange={this.handleChange } onKeyPress={this.handleKeyPress} /> <nbsb> </nbsb> 
                <button className="button1" onClick={this.handleOnClick} >Add</button>
            </div>
        )

    }
}