import React from "react";


/**
 * The root HTML page.
 */
export default class Html extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{ this.props.title }</title>
          <meta charSet="utf-8"/>
          <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
          <link href="/css/common" rel="stylesheet"/>
          <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700,300italic,400italic" rel="stylesheet" type="text/css"/>
        </head>
        <body>
          <div id="root">{ this.props.body }</div>
        </body>
        <script type="text/javascript" src="/js"/>
      </html>
    );
  }
}






// API -------------------------------------------------------------------------
Html.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.node,
  env: React.PropTypes.oneOf(["production", "development"]),
  page: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  }).isRequired
};
Html.defaultProps = {
  title: "Untitled"
};
