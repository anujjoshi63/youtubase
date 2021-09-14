import React, { useState, useEffect } from 'react';
import { Container, Divider } from '@material-ui/core';
import BrandHeader from './components/BrandHeader';
import VideoPoster from './components/VideoPoster';
import PostsViewer from './components/PostsViewer';
import './App.css';

function App() {
	//react states
	const [posts, setPosts] = useState(null);
	useEffect(() => {
		fetch('http://localhost:8000/videos')
			.then(res => res.json())
			.then(data => {
				setPosts(data);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<Container fixed style={{ display: 'flex', flexDirection: 'column' }}>
			<BrandHeader style={{ position: 'fixed' }} />
			<VideoPoster setPosts={setPosts} posts={posts} />
			<Divider style={{ backgroundColor: 'black' }} />
			{posts !== null && <PostsViewer posts={posts} />}
		</Container>
	);
}

export default App;
