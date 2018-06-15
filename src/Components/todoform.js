import React from 'react';

export class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleKeyPress=this.handleKeyPress.bind(this);
    }
    handleChange(e){
        this.setState({value:e.target.value});
    }
    handleKeyPress(e){
        if(e.charCode===13){
            this.props.addItem(this.state.value);
        }
    }
   
    render(){
        return (
            <div>TASK : 
                <input type="text" value={this.state.value} onChange={this.handleChange } onKeyPress={this.handleKeyPress}/>
                <button onClick={() => this.props.addItem(this.state.value)} >Add</button>
            </div>
        )

    }
}