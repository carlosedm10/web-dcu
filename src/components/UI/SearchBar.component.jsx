import React from 'react';
const SearchBar = () => {
	return (
		<div className="relative cursor-not-allowed">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3">
						<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
				</div>
				<input id="default-search" className="cursor-not-allowed block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Buscar..." />
		</div>
	)
}

export default SearchBar;
