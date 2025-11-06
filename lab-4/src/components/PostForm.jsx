export default function PostForm({ newPost, handleOnChange, handleAddToList }) {
  return (
    <div className="formCard">
      <h3>Post form</h3>
      <form onSubmit={handleAddToList}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={newPost.title}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="body">body:</label>
        <input
          type="text"
          name="body"
          id="body"
          value={newPost.body}
          onChange={handleOnChange}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  ); }
