import { Formik, Form, Field } from "formik";
// import React from "react";
// import { useState } from "react";
import users from "../users";
// import UserPage from "./UserPage";
import { useNavigate } from "react-router-dom";



interface FormModel{
    name: string,
    password: string
}

function Login() {

    const navigate = useNavigate();

    // const [name, setName] = useState("");
    // const [password, setPassword] = useState("");
    // const [submitHover, setSubmitHover] = useState("");
    // const [resetHover, setResetHover] = useState("");

    // const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(event.target.value);
    // }

    // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setPassword(event.target.value);
    // }

    // const handleSubmit = (name: string, password: string) => {
    //     // event.preventDefault();
        
    //     const loggedInUser = users.find(user => user.name === name && user.password === password );

    //     console.log(loggedInUser);

    //     if(loggedInUser){
    //         // window.open("https://localhost:5173/user")
    //         return <Link to="/user" />;
    //     }
    // }

    // const handleReset = (event: React.MouseEvent<HTMLElement>) => {
    //     event.preventDefault();

    //     setName("");
    //     setPassword("");
    // }

    // const handleSubmitOver = () => {
    //     if(!submitHover){
    //         setSubmitHover("bg-blue-700");
    //     } else{
    //         setSubmitHover("");
    //     }
        
    // }

    // const handleResetOver = () => {
    //     if(!resetHover){
    //         setResetHover("bg-yellow-600");
    //     } else{
    //         setResetHover("");
    //     }
        
    

    // const formik = useFormik({
    //     initialValues:{
    //         name: "",
    //         password: ""
    //     }
    // }
    // onSubmit={values => {
    //     console.log(values)
    // }
    // }
    // );

    
    return (   
        <Formik<FormModel>
        initialValues={{
            name: "",
            password: ""
        }}
        onSubmit={(values) => { 
            console.log(values);
            // alert(JSON.stringify(values))
            const loggedInUser = users.find(user => user.name === values.name && user.password === values.password );

        console.log(loggedInUser);

        if(loggedInUser){
            // window.open("https://localhost:5173/user")
            navigate(`/user/${values.name}`)
        }


        }}
        onReset={(values) => {
            values.name = "";
            values.password = "";
        }}
        >
        <Form>
            <div className="grid grid-cols-1 text-center bg-stone-200 mx-10 pb-52">
                <h1 className="bg-blue-300 m-2 mx-10 p-3 rounded-full border-4 border-blue-500 font-bold text-2xl text-blue-800">Login</h1>
                <div className="bg-cyan-200 mx-96 pb-24 pt-10 rounded-xl border-4 border-cyan-500">
                <div className=" m-2">
                    <label className="bg-stone-500 rounded pr-32 px-2 text-white">Name:</label>
                </div>
                <div>
                    <Field name="name" type="text" className="bg-zinc-200 rounded border-2 border-gray-400 mx-2 mb-4" />
                </div>
                <div className=" m-2">
                    <label className="bg-stone-500 rounded pr-28 px-2 text-white">Password:</label>
                </div>
                <div>
                    <Field name="password" type="password" className="bg-zinc-200 border-2 border-gray-400 rounded mx-2 mb-4" />
                </div>
                <div className="m-2 grid grid-cols-2 mx-60">
                    
                    <button type="submit" className="bg-green-400 rounded border-2 text-white border-black font-bold mr-5 p-1 px-2">Submit</button>
                    <button type="reset" className="bg-orange-400 rounded border-2 text-white border-black font-bold ml-5 p-1 px-2">Reset</button>
                
                </div>    
                </div>
                
            </div>
        </Form>
            
        </Formik>
        
                
        )
}

export default Login;