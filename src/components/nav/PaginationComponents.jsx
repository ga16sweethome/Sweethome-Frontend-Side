import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponents = () => {
  const lastPage = 8;
  const pages = [];

  const [activePage, setActivePage] = useState(1);
  const [startPage, setStartPage] = useState(2);
  const [endPage, setEndPage] = useState();

  useEffect(() => {
    lastPage > 5 ? setEndPage(5) : setEndPage(lastPage - 1);
  }, [lastPage]);

  const handleNextPage = () => {
    const activeNow = activePage;
    setActivePage(activeNow + 1);
    activePage >= endPage && activePage < lastPage - 1 && handleMorePages();
  };

  const handlePrevPage = () => {
    const activeNow = activePage;
    setActivePage(activeNow - 1);
    activePage <= startPage && activePage > 2 && handleLessPages();
  };

  const handleMorePages = () => {
    setStartPage(endPage + 1);
    endPage + 4 < lastPage ? setEndPage(endPage + 4) : setEndPage(lastPage - 1);
    setActivePage(endPage + 1);
  };

  const handleLessPages = () => {
    const startFrom = startPage - 4 > 1 ? startPage - 4 : 2;
    setStartPage(startFrom);
    startFrom + 4 < lastPage
      ? setEndPage(startFrom + 3)
      : setEndPage(lastPage - 1);
    setActivePage(startPage - 1);
  };

  const goToFirstPage = () => {
    setActivePage(1);
    2 < lastPage && setStartPage(2);
    1 + 4 < lastPage ? setEndPage(5) : setEndPage(lastPage - 1);
  };

  const goToLastPage = () => {
    setActivePage(lastPage);
    lastPage - 4 > 1 ? setStartPage(lastPage - 4) : setStartPage(2);
    setEndPage(lastPage - 1);
  };

  for (let number = startPage; number <= endPage; number++) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => setActivePage(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.Prev disabled={activePage <= 1} onClick={handlePrevPage} />
      <Pagination.Item
        key={1}
        active={1 === activePage}
        onClick={goToFirstPage}>
        {1}
      </Pagination.Item>

      {startPage > 2 && <Pagination.Ellipsis onClick={handleLessPages} />}

      {pages}

      {endPage < lastPage - 1 && (
        <Pagination.Ellipsis onClick={handleMorePages} />
      )}

      {lastPage > 1 && (
        <Pagination.Item
          key={lastPage}
          active={lastPage === activePage}
          onClick={goToLastPage}>
          {lastPage}
        </Pagination.Item>
      )}

      <Pagination.Next
        disabled={activePage >= lastPage}
        onClick={handleNextPage}
      />
    </Pagination>
  );
};

export default PaginationComponents;
