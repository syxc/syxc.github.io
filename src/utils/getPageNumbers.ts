import { SITE } from "@config";

const getPageNumbers = (numberOfPosts: number, postPerPage?: number) => {
  const perPage = postPerPage ?? Number(SITE.postPerPage);
  const numberOfPages = numberOfPosts / perPage;

  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return pageNumbers;
};

export default getPageNumbers;
