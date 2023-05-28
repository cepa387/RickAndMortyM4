import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
    const [userData, setUserData] = useState({ 
        username: '', 
        password: '' 
    });

    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }));

        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }

    return(
        <div>
            <form>
                <div>
                    <label>Username</label>
                    <input                
                    type="text" 
                    placeholder="username"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                    />
                    {errors.e1 ? (
                        <p>{errors.e1}</p>
                    ) : errors.e2 ? (
                        <p>{errors.e2}</p>
                    ) : (
                        <p>{errors.e3}</p>
                    )}
                </div>
                <div>
                    <label>Password</label>
                    <input                      
                    type="password"
                    placeholder="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    />
                    {errors.p1 ? (
                        <p>{errors.p1}</p>
                    ) : (
                        <p>{errors.p2}</p>
                    )}
                </div>
                <button type="submit" onClick={handleSubmit}>LOGIN</button>
            </form>
        </div>
    )
}

export default Form;