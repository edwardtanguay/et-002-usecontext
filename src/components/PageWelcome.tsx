import { useContext } from 'react';
import { AppContext,IAppContext } from '../AppContext';

export const PageWelcome = () => {
	const { books } = useContext<IAppContext>(AppContext);

	return (
		<>
			<p>Welcome to this site.</p>
			<p>In our club we are reading{' '}
				{books.length === 0 ? (
					<span><span>...loading...</span> books</span>
				) : (
						<span>{ books.length } books.</span> 
				)}
			</p>
		</>
	);
};