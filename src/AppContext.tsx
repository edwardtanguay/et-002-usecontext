import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { IBook } from './interfaces';

export interface IAppContext {
	appTitle: string;
	books: IBook[];
}

interface IAppProvider {
	children: React.ReactNode;
}

function capitalizeFirstLetter(line: string) {
  return line.charAt(0).toUpperCase() + line.slice(1);
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

const booksUrl = 'https://edwardtanguay.vercel.app/share/techBooks.json';

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [books, setBooks] = useState<IBook[]>([]);
	const appTitle = 'The Berlin Study Group';

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				const rawBooks = (await axios.get(booksUrl)).data;
				const _books:IBook[] = [];
				rawBooks.forEach((rawBook:IBook) => {
					const _book: IBook = {
						id: rawBook.id,
						idCode: rawBook.idCode,
						title: rawBook.title,
						description: rawBook.description,
						language: rawBook.language === '' ? 'English' : capitalizeFirstLetter(rawBook.language)
					};
					_books.push(_book);
				})
				setBooks(_books);
			})();
		}, 1000);
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				books,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
