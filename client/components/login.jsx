import React from 'react';
export const Form = () => {
    return (
    <>
        <h1>Prueba Proyecto</h1>
        <form> 
            <h2> Login </h2>
            <input type = "text" name= "login"> </input>
            <h2> Password </h2>
            <input type= "password" name = "password"> </input>
            <button classname = "btn btn-primary"> Submit </button>
        </form>
    </>
    )
};
export default Form;
