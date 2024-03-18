import { useState, useEffect } from 'react';

function useLoading(initialLoadingState = true, delay = 200) {
  const [loading, setLoading] = useState(initialLoadingState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return loading;
}

export default useLoading;
