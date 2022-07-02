import axios from "axios";
import { useEffect, useState } from "react";

type Posts = {
  id: string;
  title: string;
  content: string;
};

export const usePosts = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPosts();
  }, []);

  const getPosts = () => {
    axios.get("/api/posts").then(
      (res) => {
        console.log("11111", res);
        setPosts(res.data);
        setIsLoading(false);
        if (res.data.length === 0) {
          setIsEmpty(true);
        }
      },
      () => {
        setIsLoading(false);
      }
    );
  };

  return {
    posts,
    setPosts,
    isEmpty,
    setIsEmpty,
    isLoading,
    setIsLoading,
  };
};
