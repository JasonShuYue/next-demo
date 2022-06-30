import { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../lib/posts";

const Posts = async (request: NextApiRequest, response: NextApiResponse) => {
  const posts = await getPosts();
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.write(JSON.stringify(posts));
  response.end();
};

export default Posts;
