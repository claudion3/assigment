import React from 'react';
import './Items.css';

const Items = props => {
	return (
		<div className='items'>
			<div className='itemTitle'>
				<h1>{props.title}</h1>
			</div>
			<div className='itemDescription'>
				<h2>{props.description}</h2>
			</div>

			<div className='itemImage'>
				<img src={props.imagePath} alt='img' />
			</div>
		</div>
	);
};

export default Items;
