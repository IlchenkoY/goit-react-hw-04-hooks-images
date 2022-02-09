import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoaderSpinner } from './components/Loader/Loader';
import { LoadMoreBtn } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { imagesApi } from 'fetchApi';
import s from './App.module.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [imgesData, setImgesData] = useState([]);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!searchQuery) return;

    setStatus('pending');

    imagesApi
      .fetchWithQuery(searchQuery, page)
      .then(response => {
        if (response.length < 12) {
          setImgesData(prevImgesData => [...prevImgesData, ...response]);
          setStatus('rejected');
          return;
        }
        if (page > 1) {
          setImgesData(prevImgesData => [...prevImgesData, ...response]);
          setStatus('resolved');
          return;
        }
        setImgesData([...response]);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
        setStatus('rejected');
      });
  }, [page, searchQuery]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
  };

  const handleLoadMoreBtnClick = () => {
    setPage(page => page + 1);
  };

  const handleModalOpen = (largeImageUrl, description) => {
    setIsModalOpen(true);
    setLargeImageUrl(largeImageUrl);
    setDescription(description);
  };

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className={s.App}>
      <SearchBar onSubmit={handleFormSubmit} />
      {imgesData.length > 0 && (
        <>
          <ImageGallery data={imgesData} onModalOpen={handleModalOpen} />
          {status !== 'pending' && status !== 'rejected' && (
            <LoadMoreBtn onClick={handleLoadMoreBtnClick} />
          )}
        </>
      )}

      {status === 'pending' && <LoaderSpinner />}
      {isModalOpen && (
        <Modal
          largeImageUrl={largeImageUrl}
          description={description}
          onModalClose={handleModalClose}
        />
      )}
      <ToastContainer position="top-center" />
    </div>
  );
};

export { App };
