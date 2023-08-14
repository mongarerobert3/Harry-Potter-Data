import React from 'react';

const Loading = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="rounded-t-lg w-full h-80 bg-gray-200"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-200 w-4/5 mb-2"></div>
        <div className="h-4 bg-gray-200 w-3/4"></div>
      </div>
      <div className="mx-2 flex justify-end">
        <button className="my-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Loading...
        </button>
      </div>
    </div>
  );
};

export default Loading;
