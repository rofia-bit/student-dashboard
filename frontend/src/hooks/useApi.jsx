import { useEffect, useState, useCallback } from 'react';

// useApi: simple hook to run an async function and provide { data, error, loading, reload }
// fn should be an async function (no args) that returns data
export default function useApi(fn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const run = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fn();
      setData(res);
      return res;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }, /* eslint-disable-line react-hooks/exhaustive-deps */ [fn, ...deps]);

  useEffect(() => {
    run();
    return () => {};
  }, [run]);

  return { data, loading, error, reload: run };
}
