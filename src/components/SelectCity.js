import React from 'react';

const SelectCity = props => {
    const {setInputValue, handleSubmit} = props;

    return(
        <form className="search-box" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-bar"
                value={props.inputValue}
                onChange={e=>setInputValue(e.target.value)}
                placeholder="Search city..."
            />
        </form>
    )
}

export default SelectCity;