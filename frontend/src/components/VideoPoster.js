import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import config from '../config';
import Swal from 'sweetalert2/';
const VideoPoster = ({ setPosts, posts }) => {
	//react states
	const [url, setUrl] = useState('');

	//handlers
	const handleUrlChange = e => {
		setUrl(e.target.value);
	};
	const handleUrlSubmit = async e => {
		let newURL;
		try {
			newURL = new URL(url);
			let valid =
				newURL.protocol === 'https:' &&
				newURL.href.startsWith('https://www.youtube.com/watch?v=');
			if (valid) {
				await fetch(
					'https://www.googleapis.com/youtube/v3/videos?id=' +
						url.substr('https://www.youtube.com/watch?v='.length, 100) +
						'&key=' +
						config.API_KEY +
						'&fields=items(snippet(title,thumbnails(medium)),statistics(viewCount,likeCount,dislikeCount))&part=snippet,statistics'
				)
					.then(res => res.json())
					.then(async data => {
						let video = data.items[0];
						let videoData = {
							thumbnail: video.snippet.thumbnails.medium.url,
							title: video.snippet.title,
							views: +video.statistics.viewCount,
							likes: +video.statistics.likeCount,
							dislikes: +video.statistics.dislikeCount
						};
						await fetch('http://localhost:8000/videos', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify({ ...videoData })
						})
							.then(res => res.json())
							.then(data => {
								setPosts(data);
								Swal.mixin({
									toast: true,
									position: 'bottom-end',
									showConfirmButton: false,
									timer: 2500,
									timerProgressBar: false
								}).fire({
									icon: 'success',
									title: 'New Post Created!😄'
								});
							});
					})
					.catch(err => {
						Swal.fire({
							icon: 'error',
							title: 'Something went wrong!',
							showConfirmButton: true
						});
						console.error(err);
					});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Invalid URL!'
				});
			}
		} catch (_) {
			// do error action
			Swal.fire({
				icon: 'error',
				title: 'Invalid URL!'
			});
		}
	};
	return (
		<div style={{ display: 'flex', gap: 30, marginBottom: '2rem' }}>
			<TextField
				type="url"
				variant="outlined"
				style={{ flex: 5 }}
				placeholder="Type or Paste YouTube Video URL"
				value={url}
				onChange={handleUrlChange}
			/>
			<Button variant="outlined" style={{ flex: 1 }} onClick={handleUrlSubmit}>
				Post Video
			</Button>
		</div>
	);
};

export default VideoPoster;
