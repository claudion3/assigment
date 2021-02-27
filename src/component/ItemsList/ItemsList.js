import React from 'react';
import Items from '../Items/Items';
import './ItemsList.css';

const ItemsList = props => {
	const { result, listItems } = props;
	if (result) {
		return (
			<div className='notFound'>
				<h1>Not Found</h1>
			</div>
		);
	}
	let items = listItems.map((item, i) => {
		return <Items key={i} title={item.title} description={item.description} imagePath={item.imagePath} />;
	});
	return <div className='showItems'>{items}</div>;
};

export default ItemsList;
