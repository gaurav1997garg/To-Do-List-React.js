import React from 'react';
import { Title } from './todotitle';
import { TodoForm } from './todoform';
import { TodoList } from './todolist';
import '../Styles/todo.css';
let globeid=1;
export class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={data:[]};
        this.addItem=this.addItem.bind(this);
        this.removeItem=this.removeItem.bind(this);
    }

    addItem(item){
        const newitem={val:item,id:globeid++};
        this.setState({data : [...this.state.data,newitem]});

    }

    removeItem(id){
        let newData=this.state.data.filter((x) => {if(x.id!==id) return x;});
        this.setState({data : newData});
    }

    render(){
        return (
            <div className="outer">
                <div className="inner1"> < Title /> </div>
                <div className="inner2">
                    <TodoForm addItem={this.addItem}/>
                </div>
                <div className="inner3">
                    < TodoList removeItem={this.removeItem} itemData={this.state.data}/>
                </div>
            </div>
        );
    }
}
