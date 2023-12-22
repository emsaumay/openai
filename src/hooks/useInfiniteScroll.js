import { useState, useEffect, useCallback } from 'react';

const useInfiniteScroll = (fetchMoreItems) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
      return;
    }
    setIsFetching(true);
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreItems().then(() => setIsFetching(false));
  }, [isFetching, fetchMoreItems]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;