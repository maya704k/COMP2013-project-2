import PostCard from "./PostCard";

export default function PostsContainer({ data }) {
  return ( 
  <div className="postContainer">
    {data.map((post) => (
  <PostCard key={post.id}{...post} />
      ))}
    </div>
  );
}
