export default function PostCard({ title, body }) {
  return (
    <div className="PostCard">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
