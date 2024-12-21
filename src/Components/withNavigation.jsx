import React from 'react';
import { useNavigate } from 'react-router-dom';

export function withNavigation(SearchComponent) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <SearchComponent {...props} navigate={navigate} />;
  };
}
