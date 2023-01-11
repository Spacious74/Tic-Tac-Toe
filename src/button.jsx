import './button.css'
export default function button({value, handleBoxClicked}){

    return (
        <button className="btn" onClick={handleBoxClicked} >{value}</button>  
    )

}