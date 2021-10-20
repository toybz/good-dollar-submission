import React, { useEffect, useState, useRef } from "react";


// Mock async operation
const initializeApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("API Initialised Successfully");
            resolve(true);
        }, 10000);
    });
};

export const useMyAPI = (onInitialized) => {
    const callback = useRef(onInitialized);

    const updateCallback = (newCallback) => {
        callback.current = newCallback;
    };

    useEffect(() => {
        initializeApi().then(() =>{
            callback.current()
        });
    }, []);

    return {
        updateCallback,
    };
};

export function DemoPage() {


    const onInitialized = ()=> {
        console.log(`Default OnInitialized Callback` )
    }

    const {updateCallback} = useMyAPI(onInitialized)


    const [clickTimes, setClickTimes] = useState(0)

  /*
   *This method changes the callback whenever its called
   *For demo purpose, I am using a counter to show the last set and called callback
   */
    const updateOnInitializedCallback = () => {
        const clicks = clickTimes + 1
        setClickTimes(clicks)
        const newCallback = () => {
            console.log(`Callback Changed Number:  ${clicks}`)
        }
        updateCallback(newCallback)
    }


    return (<>

        <div>

            <button type='primary' onClick={updateOnInitializedCallback}>Change CallBack</button>
        </div>


    </>)
}


