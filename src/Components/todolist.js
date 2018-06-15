import React from 'react';
import '../Styles/todolist.css';
export class TodoList extends React.Component{
    render(){
        let listnode=this.props.itemData;
        return (
            <div className="myList">
                <ul>
                    {listnode.map((x)=> {return(<li key="x.id" onClick={() =>this.props.removeItem(x.id)}>{x.val}</li>);})}
                </ul>
            </div>
        );
    }
}

