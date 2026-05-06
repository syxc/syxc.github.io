import { SITE } from "@config";
import getPageNumbers from "./getPageNumbers";

interface GetPaginationProps<T> {
  posts: T;
  page: string | number;
  isIndex?: boolean;
  postPerPage?: number;
}

const getPagination = <T>({
  posts,
  page,
  isIndex = false,
  postPerPage,
}: GetPaginationProps<T[]>) => {
  const perPage = postPerPage ?? Number(SITE.postPerPage);
  const totalPagesArray = getPageNumbers(posts.length, perPage);
  const totalPages = totalPagesArray.length;

  const currentPage = isIndex
    ? 1
    : page && !isNaN(Number(page)) && totalPagesArray.includes(Number(page))
      ? Number(page)
      : 0;

  const lastPost = isIndex ? perPage : currentPage * perPage;
  const startPost = isIndex ? 0 : lastPost - perPage;
  const paginatedPosts = posts.slice(startPost, lastPost);

  return {
    totalPages,
    currentPage,
    paginatedPosts,
  };
};

export default getPagination;
