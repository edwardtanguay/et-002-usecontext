import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageBooks = () => {
	const { books } = useContext<any>(AppContext);
	console.log(books);
	// TODO: find out why in console.log code here is running twice

	return (
		<>
			{books.length === 0 ? (
				<p>Loading...</p>
			) : (
				<p>This is the Books page.</p>
			)}
		</>
	);
};
