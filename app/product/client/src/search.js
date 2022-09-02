export const ZERO_HITS = 'zero hits';
export const CONTENT_ONLY = 'content only';

const executeProductSearch = (queryData) => {
  if (['', ZERO_HITS, CONTENT_ONLY].some((value) => value === queryData.query)) {
    return new Promise((resolve) => {
      resolve({
        count: 0,
        suggestions: ['737'],
        results: [],
      });
    });
  }
  return new Promise((resolve) => {
    resolve({
      count: 3,
      results: [
        {
          id: '1',
          name: ' 737 egine',
          price: '$0.99',
          image: 'http://localhost:3011/assets/737.png',
        },
        {
          id: '2',
          name: ' 777 egine',
          price: '$1.89',
          image: 'http://localhost:3011/assets/777.png',
        },
        {
          id: '3',
          name: ' 787 egine',
          price: '$1.99',
          image: 'http://localhost:3011/assets/787.png',
        },
      ],
    });
  });
};

const executeProductCount = (queryData) => {
  if (queryData.query === ZERO_HITS || queryData.query === CONTENT_ONLY) {
    return new Promise((resolve) => {
      resolve({
        count: 0,
      });
    });
  }
  return new Promise((resolve) => {
    resolve({
      count: 3,
    });
  });
};

export { executeProductSearch, executeProductCount };
