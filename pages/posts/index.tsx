import { usePosts } from "../../hooks/usePosts";

const PostsIndex = () => {
  const { isLoading, isEmpty, posts } = usePosts();
  return (
    <div className="posts-index">
      <h1>文章列表</h1>
      {isLoading
        ? "加载中"
        : isEmpty
        ? "暂无文章"
        : posts?.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};

export default PostsIndex;
