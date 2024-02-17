import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    const login = async () => {
        
        navigate("/login");
    }
    const signin = async () => {
        
        navigate("/signin");
    }
    const logout = async () => {
        await actions.clearToken();
        
    }


	return (
		<div className="text-center mt-5">
			<button onClick={login}>Login</button>
			<button onClick={signin}>SignIn</button>
			<button onClick={logout}>Salir</button>
            
		</div>
	);
};
