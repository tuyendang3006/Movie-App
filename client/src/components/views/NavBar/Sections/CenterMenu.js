import React, { useState } from 'react';
import { Button, Input, Icon } from 'antd';

function CenterMenu(props) {

    const [searchValue, setSearchValue] = useState("");

    const handleOnSubmit = e => {
        e.preventDefault();
        if (searchValue) {
            setSearchValue("");
            props.push(`/search/${searchValue}`);
        }
    };

    const handleOnChange = (e) => {
	 	setSearchValue(e.target.value)
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (    
        <form onSubmit={handleOnSubmit}>  
            <br/>
            <Input type="search" 
                    name="film" 
                    placeholder="Search for a film..."  
                    style={{ width: '30%', borderRadius: '5px' }}
                    value={searchValue}
                    onChange={handleOnChange}
            />
            <Button style={{ width: '5%', height: '30px' }}  onClick={callSearchFunction} >
                <Icon type="search" style={{ fontSize: '20px', color: '#08c' }}/>
            </Button>  
        </form>
    )
  }
  
  export default CenterMenu