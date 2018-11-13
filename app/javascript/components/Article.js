import React from "react"
import PropTypes from "prop-types"

import Timestamp from "react-timestamp"

class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          {this.props.description}
          <div class="article-meta-details">
            <small>
              Created by: {this.props.author},
              &nbsp;
              <Timestamp time={this.props.created_at} presicion={3} />,
              last updated: <Timestamp time={this.props.updated_at} presicion={3} />
            </small>  
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title:       PropTypes.string,
  path:        PropTypes.string,
  description: PropTypes.string,
  author:      PropTypes.string,
  created_at:  PropTypes.string,
  updated_at:  PropTypes.string
};
export default Article
