/**
 * Take an element or object of elements and return props to be passed to a
 * parent component.
 */

import React from 'react';

const elementToProps = element => {
  const props = {};
  if (React.isValidElement(element) || element === null) {
    props.children = element;
  } else if (element) {
    Object.keys(element).forEach(key => {
      props[key] = element[key];
    });
  }
  return props;
};

export default elementToProps;
