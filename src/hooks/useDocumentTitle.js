import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Lensify - eCommerce App';
    }
  }, [title]);
};

export default useDocumentTitle;
