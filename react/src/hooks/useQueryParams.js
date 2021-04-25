import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [params, setParams] = useState(Object.fromEntries(searchParams));

  useEffect(() => {
    for (const key of Object.keys(params)) {
      const value = params[key];
      value ? searchParams.set(key, value) : searchParams.delete(key);
    }
    history.push({ search: decodeURIComponent(searchParams.toString()) });
  }, [params]);

  return [params, setParams];
};
