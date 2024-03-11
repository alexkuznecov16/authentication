import {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = () => {
		// Здесь вы можете выполнить логику входа, например, запрос к серверу и т. д.
		setIsLoggedIn(true);
	};

	const logout = () => {
		// Здесь вы можете выполнить логику выхода
		setIsLoggedIn(false);
	};

	return <AuthContext.Provider value={{isLoggedIn, login, logout}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};
