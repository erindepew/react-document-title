'use strict';

var React = require('react')

function useDocumentTitle(title) {
  React.useEffect(
    () => {
      const originalTitle = document.title;
      document.title = title;
      console.log('originalTitle', document.title);
      console.log('title', title);
      return () => {
        document.title = originalTitle;
      };
    },
    [title]
  );
}

function DocumentTitle({title, children}) {
  useDocumentTitle(title);
  console.log('rendering', title)
  if (children) {
    return React.Children.only(children);
  } else {
    return null;
  }
}

DocumentTitle.displayName = "DocumentTitle";

module.exports = DocumentTitle;
