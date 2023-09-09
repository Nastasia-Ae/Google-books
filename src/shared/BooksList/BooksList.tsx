import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clickedButtonLoading, RootState, updateIndexBook } from '../../store';
import { Book } from './Book/Book';
import styles from './bookslist.css';

interface BookProps {
    image?: string,
    categories?: string,
    title?: string,
    authors?: string,
    imageLinks?: any,
    categoriesAll?: string,
    description?: string
}

export function BooksList() {

  const loading = useSelector<RootState, boolean>(state => state.loading);
  const indexBook = useSelector<RootState, number>(state => state.indexBook);
  const maxResult = useSelector<RootState, number>(state => state.maxResultStepBook);
  const bookСounter = useSelector<RootState, number>(state => state.totalItems);
  const errorloading = useSelector<RootState, string>(state => state.errorloading);
  const bookListShow = useSelector<RootState, boolean>(state => state.bookListShow);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const dataBook = useSelector<RootState, []>(state => state.dataBooks);

  useEffect(() => {

    if (bookListShow === true) {

      navigate('/books')
      
    }

  }, [bookListShow ])
  

  function onClick() {
    dispatch(clickedButtonLoading(true));
    dispatch(updateIndexBook(indexBook + maxResult));
  };

  return (
    <div className={styles.bookList_block}>

      {bookListShow && (
        <Link to='/books'>
          <div className={styles.bookСounter}>Найдено {bookСounter} </div>

          <ul className={styles.list}>
          
          {dataBook.map((item:{id:string, volumeInfo: BookProps}) =>

            <Book key={item.id} item={item}/>
            
            )}

          </ul>

          <button className={styles.button}
            onClick={onClick}>
            Load more
          </button>

        </Link>
      )}

      {loading && (
        <div className={styles.loader}>
          Загрузка...
        </div>
      )}

      {errorloading && (
        <div style={{ textAlign: 'center' }}>{errorloading}</div>
      )}
    </div>
  );
}
