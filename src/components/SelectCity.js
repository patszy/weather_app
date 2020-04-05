import React from 'react';

const SelectCity = props => {
    return(
        <form className="search-box" onSubmit={props.submit}>
            <input
                type="text"
                className="search-bar"
                value={props.inputValue}
                onChange={props.getInputValue}
                placeholder="Search city..."
            />
        </form>
    )
}

export default SelectCity;