import React, { useState } from 'react';
import './App.css';
import ItemList from './component/ItemsList/ItemsList';
import SearchItems from './component/SearchItem/SearchItem';
import Pagination from './component/Pagination/Pagination';
import items from './data/items.json';

const listItems = items;

function App() {
	const [query, SetQuery] = useState('');
	let notFound = false;
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPage] = useState(3);

	const handlerChange = e => {
		const value = e.target.value;
		SetQuery(value);
	};

	const filterItems = listItems.filter(item => {
		return item.title.toLowerCase().includes(query.toLowerCase());
	});

	const indexOfLastItem = currentPage * itemsPage;
	const indexOfFirstItems = indexOfLastItem - itemsPage;
	const currentItems = filterItems.slice(indexOfFirstItems, indexOfLastItem);
	const paginate = pageNumber => {
		setCurrentPage(pageNumber);
	};
	if (currentItems.length === 0) {
		notFound = true;
	}
	return (
		<div className='home'>
			<SearchItems onChange={handlerChange} />
			<ItemList listItems={currentItems} result={notFound} />
			<Pagination itemsParPage={itemsPage} totalItems={filterItems.length} paginate={paginate} />
		</div>
	);
}

export default App;
