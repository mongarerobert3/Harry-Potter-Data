'use client'

/***
 * search By name or house
 * @return - the Character as per the search input 
 */

import React,{ useState} from 'react';
import { useFetch } from '../app/api'
import { Character } from '@common.types';
import Card from './Card';

const SearchBar = () => {
  /**
   * @searchInput - State to hold the list of characters.
   * @type - string
   * @data - holds the object data
   */
  const [searchInput, setSearchInput] = useState('');
  const { data, error} = useFetch();


  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  /**
   * Function to determine if a character matches the search input.
   * @param {Character} item - The character to check.
   * @returns {boolean} - True if the character matches the search input, false otherwise.
   */
  const filteredData = data.filter((item: Character) => 
    item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    item.house.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <section className='wrapper'>
      <form className='w-full pl-6 md:pl-10 my-2 mx-3 md:mx-6 lg:mx-9'>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Search Name, House..."
            required
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {searchInput && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredData.map((item: Character, index) => (
          <Card key={index} item={item}/>
        ))}
      </div>
      )}
      
    </section>		
    
  );
}

export default SearchBar;
