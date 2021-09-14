import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
const FilterPosts = ({ posts, setFilteredPosts }) => {
	//react states
	const [searchQuery, setSearchQuery] = useState('');

	//handlers
	const handleSearchQueryChange = e => {
		setFilteredPosts(
			posts.filter(
				post =>
					post.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
			)
		);
		setSearchQuery(e.target.value);
	};

	return (
		<div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
			<TextField
				type="url"
				style={{ width: '100%' }}
				variant="outlined"
				placeholder="Type to search a post"
				value={searchQuery}
				onChange={handleSearchQueryChange}
			/>
		</div>
	);
};

export default FilterPosts;
