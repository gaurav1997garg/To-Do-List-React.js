import React from 'react';
import { Title } from './todotitle';
import { TodoForm } from './todoform';
import { TodoList } from './todolist';

let globeid=1;
export class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={data:[],clearform:false};
        this.addItem=this.addItem.bind(this);
        this.removeItem=this.removeItem.bind(this);
    }

    addItem(item){
        const newitem={val:item,id:globeid++};
        if(newitem.val!==""){
            this.setState({data : [...this.state.data,newitem]});
            this.setState({clearform:true});
        }
        

    }

    removeItem(id){
        let newData=this.state.data.filter((x) => {if(x.id!==id) return x;});
        this.setState({data : newData});
    }

    render(){
        return (
            <div class="outer">
                <div class="inner1"> < Title /> </div>
                <div class="inner2">
                    <TodoForm addItem={this.addItem} clearForm={this.state.clearform}/>
                </div>
                <div class="inner3">
                    < TodoList removeItem={this.removeItem} itemData={this.state.data}/>
                </div>
            </div>
        );
    }
}
