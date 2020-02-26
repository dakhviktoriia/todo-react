import React from 'react';
import './item-filter.css'


const ItemFilter = ( { filter, onFilterClick } ) => {
    const arrStatus = ['all', 'active', 'done'];
    const status = arrStatus.map((item) => {
        let isActive;
        if(item === filter) {
            isActive = true
        } else{
            isActive = false

        }
    const classOfButton = 'btn ' + (isActive ? 'btn-dark' : 'btn-outline-dark');
        return (
            <button 
                key = {item}
                type="button" 
                className= {classOfButton}
                onClick={() => onFilterClick(item)}
                >{item}</button>
        )
    })

    return (
        <div className="btn-group" role="group">
            {status}
        </div>

    )

}

export default ItemFilter;