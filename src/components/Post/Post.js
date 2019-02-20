import React, {Component} from 'react';
import './Post.css';

class Post extends Component {

    render() {
        return (
            <article className="Post">
                <img src={this.props.icon} alt="#"/>
                {this.props.value}
            </article>
        );
    }
}

export default Post;