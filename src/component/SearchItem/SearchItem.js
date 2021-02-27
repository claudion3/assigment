import React from 'react';
import './SearchItem.css';

const SearchItems = props => {
	const { onChange } = props;
	const handlerChange = e => {
		onChange(e);
	};

	return (
		<div className='header'>
			<input type='text' placeholder='Search...' onChange={handlerChange} />
		</div>
	);
};
export default SearchItems;
