import Link from 'next/link';

import Layout from '../components/Layout';


const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <PostLink id = "hello-nextjs" title={"Hello next.js"}></PostLink>
        <PostLink id = "learn-next" title={"next.js is handsome"}></PostLink>
        <PostLink id = "deploy" title={"Deloy apps with Zeit"}></PostLink>
    </Layout>
);