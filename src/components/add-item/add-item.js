import React from 'react';
import './add-item.css'
class AddItem extends React.Component{
    state = {
        newItem: '',
        dis: true
    }
    
    onChangeInput = (event) => {
        console.log(event.target.value);
        if(!event.target.value){
            this.setState({
                dis: true,
            }) 
        }else{
            this.setState({
                dis: false,
            }) 
        }
        
        this.setState({
            newItem: event.target.value,
        }) 
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onItemAdd(this.state.newItem)
        this.setState({
            newItem: ''
        })
    }
    
render() {
    const {item, dis} = this.state;
    return (
        <form 
            className="input-group mb-3"
            onSubmit = {this.onFormSubmit}>
            <input 
                type = "text" 
                className = "form-control empty" 
                placeholder="New item" 
                onChange = {this.onChangeInput}
                value = {item}></input>
             <div className = "input-group-append">
                <button 
                    className ="btn btn-dark" 
                    type="submit"
                    disabled = {dis} >Add Item</button>
            </div>
        </form>
        ) 
    } 
}

export default AddItem;