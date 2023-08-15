import React from 'react';
import NotFoundPage from '../../components';

/**
 * All unknown redirects
 * @returns A 404 page 
 */
const catchAllRoute = () => {
	return <NotFoundPage />
}

export default catchAllRoute