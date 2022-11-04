import { useState } from "react";

const ItemCount = ({handleOnAdd}) => {


    const [count, setCount] = useState(0);

    
    const handleSumar = (e) => {
        console.log(e)
        console.log(e.target)
        e.stopPropagation()
        setCount(count + 1);
    }

    const handleRestar = (e) => {
        console.log(e.target)
        setCount(count - 1);
    }


    const handleConfirmar = () => { 
        handleOnAdd(count)
    }


    return (
            
            <div className="counter-actions">
            <p>{count}</p>
            {
                count? <button onClick={handleRestar}>-</button> : ""
            }
            
                
                <button onClick={handleSumar}>+</button>
                
                
                <button onClick={handleConfirmar}>confirmar</button>
            </div>
            
    )

}

export default ItemCount