import Layout from '../components/Layout';

import {withRouter} from 'next/router';

const Post = withRouter((props) => (

    <Layout>
        <h1>{props.router.query.title}</h1>
        <p>This is the blog post content.</p>
    </Layout>
));

export default Post;