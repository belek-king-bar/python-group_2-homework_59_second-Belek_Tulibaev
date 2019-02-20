import React, {Component, Fragment} from 'react';
import './Blog.css';
import Post from '../../components/Post/Post.js';


class Blog extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        const P_URL = 'https://api.chucknorris.io/jokes/random';
        let promises = [];
        const N = 5;

        for (let i = 0; i < N; i++) {
            let request = fetch(P_URL).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong with network request');
            });
            promises.push(request);
        }

        Promise.all(promises).then(posts => {
            const updatedPosts = posts.map(post => {
                return {
                    ...post
                }
            });

            this.setState({posts: updatedPosts});
        }).catch(error => {
            console.log(error)
        })
    }


    render() {

        return (
            <Fragment>
                <section className="Posts">
                    {this.state.posts.map(post => (
                        <Post
                            key={post.id}
                            icon={post.icon_url}
                            value={post.value}
                        />
                    ))}

                </section>

                <div className="ToggleButton">
                    <button onClick={this.togglePostsForm}>New post</button>
                </div>

            </Fragment>
        )
    }

}


export default Blog;
