import React from 'react';

const PostsViewer = ({ posts }) => {
	return (
		<>
			{posts.length ? (
				posts.map((post, index) => (
					<div
						key={post.id}
						style={{
							border: '1px solid black',
							marginTop: 10,
							padding: 20,
							borderRadius: 10,
							display: 'flex'
						}}
					>
						<div style={{ flex: 1 }}>
							<img src={post.thumbnail} alt="" />
						</div>
						<div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
							<b style={{ flex: 1 }}>{post.title}</b>
							<b style={{ flex: 1 }}>Views: {post.views}</b>
							<b style={{ flex: 1 }}>Likes: {post.likes}</b>
							<b style={{ flex: 1 }}>Dislikes: {post.dislikes}</b>
						</div>
					</div>
				))
			) : (
				<h3>No posts</h3>
			)}
		</>
	);
};

export default PostsViewer;
