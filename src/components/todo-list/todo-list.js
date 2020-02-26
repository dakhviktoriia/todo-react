import React from 'react';
import './todo-list.css';

const TodoList = ( {listTodos, onItemDelete, onItemDone } ) => {

    const items = listTodos.map((item) => {
        let classOfLi = "";
        if(item.done){
            classOfLi += 'done';

        }
        console.log(listTodos);
        return (
            <div className = 'liWrap container-fluid'>
          
            <li key = {item.id}
                className = {classOfLi}
                onClick = {() => onItemDone(item.id, item) }>
                {item.label}
                
            </li>

            <button 
                type="button" 
                className="btn"
                onClick = {() => onItemDelete(item.id)}>
                    <i className = "fa fa-trash-o"/>
                </button>
            </div>
        )
    });

    return (
        <ul>
           {items}
        </ul>
    )
}

export default TodoList;