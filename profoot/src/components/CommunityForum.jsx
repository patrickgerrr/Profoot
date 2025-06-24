import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faSave, faTimes, faComment } from '@fortawesome/free-solid-svg-icons';

function CommunityForum() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Welcome to the community forum!",
      comments: [{ id: 1, text: "Thanks! Glad to be here." }],
    },
    {
      id: 2,
      content: "Share your fitness progress here!",
      comments: [{ id: 1, text: "I ran 5 miles today!" }],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editPostContent, setEditPostContent] = useState("");
  const [currentPostId, setCurrentPostId] = useState(null);
  const [newComment, setNewComment] = useState({});

  // Handle adding a new post
  const handleAddPost = () => {
    if (newPost.trim() !== "") {
      setPosts([
        ...posts,
        { id: Date.now(), content: newPost, comments: [] },
      ]);
      setNewPost("");
    }
  };

  // Handle edit mode for a post
  const handleEditPost = (id, content) => {
    setIsEditing(true);
    setCurrentPostId(id);
    setEditPostContent(content);
  };

  // Save edited post
  const handleSaveEdit = () => {
    setPosts(
      posts.map((post) =>
        post.id === currentPostId ? { ...post, content: editPostContent } : post
      )
    );
    setIsEditing(false);
    setEditPostContent("");
    setCurrentPostId(null);
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditPostContent("");
    setCurrentPostId(null);
  };

  // Delete post
  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // Handle adding a new comment
  const handleAddComment = (postId) => {
    if (newComment[postId]?.trim()) {
      setPosts(
        posts.map((post) =>
          post.id === postId
            ? {
                ...post,
                comments: [
                  ...post.comments,
                  { id: Date.now(), text: newComment[postId] },
                ],
              }
            : post
        )
      );
      setNewComment({ ...newComment, [postId]: "" });
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Community Forum</h2>

      {/* Add new post */}
      <div className="mb-4">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write a new post..."
          className="w-full p-2 rounded bg-gray-800 text-white h-24"
        />
        <button
          onClick={handleAddPost}
          className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Post
        </button>
      </div>

      {/* Display posts and comments */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 p-4 rounded-lg relative">
            {isEditing && currentPostId === post.id ? (
              <div>
                <textarea
                  value={editPostContent}
                  onChange={(e) => setEditPostContent(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 text-white h-24"
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleSaveEdit}
                    className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 mr-2"
                  >
                    <FontAwesomeIcon icon={faSave} className="mr-1" />
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
                  >
                    <FontAwesomeIcon icon={faTimes} className="mr-1" />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p>{post.content}</p>
                <div className="absolute top-2 right-2 space-x-2">
                  <button
                    onClick={() => handleEditPost(post.id, post.content)}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="text-red-400 hover:text-red-500"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
            )}

            {/* Comments Section */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Comments</h4>
              {post.comments.length > 0 ? (
                post.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="mt-2 bg-gray-700 p-2 rounded text-sm"
                  >
                    {comment.text}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 mt-2">No comments yet.</p>
              )}
              <div className="flex mt-2">
                <input
                  type="text"
                  value={newComment[post.id] || ""}
                  onChange={(e) =>
                    setNewComment({ ...newComment, [post.id]: e.target.value })
                  }
                  placeholder="Add a comment..."
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
                <button
                  onClick={() => handleAddComment(post.id)}
                  className="ml-2 px-3 py-2 bg-blue-600 rounded hover:bg-blue-700"
                >
                  <FontAwesomeIcon icon={faComment} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityForum;
