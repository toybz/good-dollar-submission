import React, {useCallback} from "react";


const items = [
    {
        id: "01",
        title: "Item 01"
    },
    {
        id: "02",
        title: "Item 02"
    },
    {
        id: "03",
        title: "Item 03"
    },

]

const ImprovedList = ({items}) => {

    /*
     * The Item id is used as the Key instead of array index, this allows React to effectively target that item and make updates only when any of its prop is updated.
     *  I moved the item iteration into the component body
     * I updated the item click handler from an inline function to a memoized function to prevent re-rendering of the children and to prevent allocating wasteful memory reference for each of the inline function object
     */

    const itemClickedHandler = useCallback((item)=>()=> console.log(item)
        , [])

    return (
        <>
            <h2> Improved List</h2>
            <ul>
                { items.map( (item)=>
                    (
                        <li key={item.id} onClick={itemClickedHandler(item)}>
                            {item.title}
                        </li>
                    )

                )}
            </ul>

        </>


    );
}

export const ListPage = ()=>{
    return(
        <ImprovedList items={items}  />
    )
}

