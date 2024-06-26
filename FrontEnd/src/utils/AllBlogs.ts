import { NextRouter } from 'next/router';

interface BlogData {
  get_paginated_ALL_blog: {
    results: any[];
  };
}

const handleNextClick = (
  setCurrentPage: (page: number) => void,
  currentPage: number,
  router: NextRouter
): void => {
  const nextPage = currentPage + 1;
  router.push(`/all-blogs/${nextPage}`);
  setCurrentPage(nextPage);
};

const handlePreviousClick = (
  setCurrentPage: (page: number) => void,
  currentPage: number,
  router: NextRouter
): void => {
  const previousPage = currentPage - 1;
  router.push(`/all-blogs/${previousPage}`);
  setCurrentPage(previousPage);
};

const handleReverse = (
  data: BlogData,
  setData: (data: BlogData) => void,
  setIsReversed: (isReversed: boolean) => void,
  isReversed: boolean
): void => {
  const reversedResults = [...data.get_paginated_ALL_blog.results].reverse();
  setData({ ...data, get_paginated_ALL_blog: { results: reversedResults } });
  setIsReversed(!isReversed);
};

const handlelimit = (setLimit: (limit: number) => void, limit: number): void => {
  if (limit === 6) setLimit(12);
  else if (limit === 12) setLimit(6);
};

export { handleNextClick, handlePreviousClick, handleReverse, handlelimit };