import React from 'react';

const SelectCity = props => {
    return(
        <form className="search-box" onSubmit={props.submit}>
            <input
                type="text"
                className="search-bar"
                value={props.inputValue}
                onChange={e=>props.setInputValue(e.target.value)}
                placeholder="Search city..."
            />
        </form>
    )
}

export default SelectCity;