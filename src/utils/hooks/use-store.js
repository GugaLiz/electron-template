import { useMemo } from 'react';

const useStore = createStoreFn => {
  const store = useMemo(createStoreFn, []);
  store?.use();
  return store;
};

export default useStore;
