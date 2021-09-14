import React from 'react';

const PostsViewer = ({ posts }) => {
	return (
		<div style={{ marginBottom: 100 }}>
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
							<img src={post.thumbnail} alt="" width="200rem" />
						</div>
						<div style={{ flex: 3, display: 'flex', flexDirection: 'column' }}>
							<b style={{ flex: 1 }}>{post.title}</b>
							<div style={{ flex: 2, display: 'flex', flexDirection: 'row' }}>
								<span style={{ flex: 1 }}>
									Views: <b>{post.views}</b>
								</span>
								<span style={{ flex: 1 }}>
									Likes: <b>{post.likes}</b>
								</span>
								<span style={{ flex: 1 }}>
									Dislikes: <b>{post.dislikes}</b>
								</span>
							</div>
						</div>
					</div>
				))
			) : (
				<h3>No posts</h3>
			)}
		</div>
	);
};

export default PostsViewer;
