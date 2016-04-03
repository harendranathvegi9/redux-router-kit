import React from 'react';

import connectRouter from './connectRouter';

const browserUrl = () => {
  if (typeof window === 'undefined') {
    return '';
  }
  if (typeof window.location === 'undefined') {
    return '';
  }
  return window.location.href || '';
};

const RouteToBrowserLocation = React.createClass({

  componentDidMount() {
    const { router, routeTo } = this.props;
    const url = browserUrl();
    if (!router.current && url) {
      routeTo(url);
    }
  },

  render() {
    const { router, children, renderBeforeCurrent } = this.props;
    if (!router.current && renderBeforeCurrent) {
      return renderBeforeCurrent({router, href: browserUrl()});
    }
    if (typeof children === 'function') {
      return children(router);
    }
    if (!router.current) {
      return null;
    }
    return children;
  }
});

export default connectRouter(RouteToBrowserLocation);
