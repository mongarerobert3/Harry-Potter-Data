import React from 'react';
import { useRouter } from 'next/navigation';
import { Character } from '@common.types';

interface CardProps {
	item: Character;
}

const Cards: React.FC<CardProps> = ({ item }) => {
  const router = useRouter();

  const handleReadMoreClick = () => {
    router.push(`/character/${encodeURIComponent(item.id)}`);
  };

	
  return (
    <div className=''>
      <div className="wrapper">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg w-full h-80 object-cover"
            src={item.image}
            alt=""
          />
          <div className="text-center">
            <h5 className="my-2 text-1xl font-bold tracking-tight text-gray-600 dark:text-white">
              Name: {item.name}
            </h5>
            <p className="mb-3 font-bold text-gray-600 dark:text-gray-400">
              D.O.B: {item.dateOfBirth}
            </p>
          </div>
          <div className="mx-2 flex justify-end">
            <button
              type="button"
              onClick={handleReadMoreClick}
              className="my-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
