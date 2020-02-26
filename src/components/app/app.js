import React from 'react';
import './app.css';

import AddItem from '../add-item/add-item';
import AppHeader from '../app-header/app-header';
import ItemFilter from '../item-filter/item-filter';
import TodoList from '../todo-list/todo-list';


class App extends React.Component{
    min = 1;
    max = 100000;
    
    state = {
        todoItems: [
            {label: "Create Todo", 
            id: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min, 
            done: false}
        ],
        filter: 'all'
    }

    addItem = (item) => {
        const newItem = {
            label:item,
            id: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
            done: false
        }
        console.log(newItem);
        
        this.setState( ({ todoItems, filter }) => {
            const newArray = [
                ...todoItems, newItem
            ]
            return {
                todoItems: newArray,
                filter: 'active'
                
            }
        }) 
    }

    deleteItem = (id) => {
        this.setState( ({todoItems})=> {
            const index = todoItems.findIndex((el)=>el.id === id);
            const newArray = [
                ...todoItems.slice(0, index), 
                ...todoItems.slice(index+1)]
            console.log(newArray);
            return {
                todoItems: newArray
            }
        })
    }

    doneItem = (id) => {
        console.log(id);
        this.setState( ({todoItems})=> {
            const index = todoItems.findIndex( (el) => el.id === id);
            const oldItem = todoItems[index];
            const newItem = {...oldItem, 'done': !oldItem.done};

            const newArray = [
                ...todoItems.slice(0, index), 
                newItem,
                ...todoItems.slice(index+1)
            ]
            return {
                todoItems: newArray
                
            }
        })
    }

    onFilterClick = (filter) => {
        this.setState({filter})
    }
    filterItem = (items,filter) => {
        if(filter === 'all'){
            return items
        }
        if(filter === 'done'){
            return items.filter((item) => item.done)
        }
        if(filter === 'active'){
            return items.filter((item) => !item.done)
        }
    }

    render() {
        const { todoItems, filter } = this.state;
        const filterArray = this.filterItem(todoItems, filter);
        console.log(filterArray);
        
        return (
            <div>
                <AppHeader />
                <AddItem  onItemAdd = {this.addItem}/>
                <TodoList 
                        listTodos = {filterArray}
                        onItemDelete = {this.deleteItem}
                        onItemDone = {this.doneItem}
                        />
                <ItemFilter
                        filter = {filter}
                        onFilterClick = {this.onFilterClick} />
            </div>
        )

    }
    
}

export default App;