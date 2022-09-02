export const ZERO_HITS = 'zero hits';

// dummy search data
const executeContentSearch = (queryData) => {
  if (['', ZERO_HITS].some((value) => value === queryData.query)) {
    return new Promise((resolve) => {
      resolve({
        count: 0,
        results: [],
        suggestions: ['737', '777', '787'],
      });
    });
  }
  if (['payback'].some((value) => value === queryData.query)) {
    return new Promise((resolve) => {
      resolve({
        count: 3,
        results: [
          {
            id: '1',
            name: queryData.query,
            image: 'http://localhost:3012/assets/blue.png',
          },
        ],
      });
    });
  }
  return new Promise((resolve) => {
    resolve({
      count: 2,
      results: [
        {
          id: '1',
          name: '737 egine',
        },
        {
          id: '2',
          name: '777 egine',
        }
      ],
    });
  });
};

const executeContentCount = (queryData) => {
  if (queryData.query === ZERO_HITS) {
    return new Promise((resolve) => {
      resolve({
        count: 0,
      });
    });
  }
  return new Promise((resolve) => {
    resolve({
      count: 2,
    });
  });
};

export { executeContentCount, executeContentSearch };
