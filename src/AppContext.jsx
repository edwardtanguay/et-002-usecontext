import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const appTitle = 'The Berlin Study Group222';
	return (
		<AppContext.Provider
			value={{
				appTitle,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
