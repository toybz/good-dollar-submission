import {useCallback, useState} from 'react';
import _debounce from 'lodash/debounce';

export const useDebouncedValue = (value, ms = 100) => {
    const [debounced, setDebounced] = useState(value)
    const updateDebounce =  (value)=>{
        setDebounced(value)
    }

    const debounce = useCallback(_debounce(updateDebounce, ms), [])


    return {debounced,  debounce}
}

export const DemoPage = ()=>{

    const [inputValue, setInputValue] = useState('')

    const {debounced, debounce} = useDebouncedValue(inputValue, 1000)


   const inputChangeHandler = (event)=>{
        const value = event.target.value
       setInputValue(value)
       debounce(value)
   }

    return (
        <>
        <p>Debounced Test is {debounced}</p>

            <input value={inputValue} onChange={inputChangeHandler}/>
        </>

    )
}
