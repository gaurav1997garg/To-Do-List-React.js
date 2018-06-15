import React from 'react';

export class TodoList extends React.Component{
    render(){
        let listnode=this.props.itemData;
        return (
            <div>
                <ul>
                    {listnode.map((x)=> {return(<li key="x.id" onClick={() =>this.props.removeItem(x.id)}>{x.val}</li>);})}
                </ul>
            </div>
        );
    }
}

