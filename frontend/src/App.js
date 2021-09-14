import React, { useState, useEffect } from 'react';
import { Container, Divider } from '@material-ui/core';
import BrandHeader from './components/BrandHeader';
import VideoPoster from './components/VideoPoster';
import PostsViewer from './components/PostsViewer';
import './App.css';

function App() {
	//react states
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		try {
			fetch('http://localhost:8000/videos')
				.then(res => res.json())
				.then(data => {
					setPosts(data);
				});
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<Container fixed style={{ display: 'flex', flexDirection: 'column' }}>
			<BrandHeader style={{ position: 'fixed' }} />
			<VideoPoster
				setPosts={setPosts}
				posts={posts}
				style={{ position: 'fixed' }}
			/>
			<Divider />
			<PostsViewer posts={posts} />
		</Container>
	);
}

export default App;
