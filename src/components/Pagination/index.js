// @ts-nocheck
import _ from "lodash";
import React from "react";

export default function Pagination({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li
          onClick={() => {
            const previousPage = currentPage - 1;
            if (!(previousPage < 1)) {
              onPageChange(previousPage);
              return;
            } else {
              alert("Page bound reached");
              return;
            }
          }}
          className="page-item disabled"
        >
          <a className="page-link" href="#" tabIndex="-1">
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              onClick={() => onPageChange(page)}
              className="page-link"
              href="#"
            >
              {page}
            </a>
          </li>
        ))}
        <li
          onClick={() => {
            const nextPage = currentPage + 1;
            if (!(nextPage > Math.ceil(items / pageSize))) {
              onPageChange(nextPage);
              return;
            } else {
              alert("Page bound reached");
              return;
            }
          }}
          className="page-item"
        >
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
