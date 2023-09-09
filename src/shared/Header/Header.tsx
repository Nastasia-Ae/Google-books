import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickedSearch, dataBooks, RootState, searchBooks, updateIndexBook } from '../../store';
import { preventDefault } from '../../utils/preventDefault';
import { SearchIcon } from '../icons';
import styles from './header.css';
import { SortBlock } from './SortBlock';



export function Header() {
  
  const search = useSelector<RootState, string>(state => state.search);
  const dispatch = useDispatch();

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    dispatch(searchBooks(ev.target.value))
  };

  function handleSubmit(ev: React.KeyboardEvent) {
 
    if (ev.key === "Enter") {
      ev.preventDefault();
      dispatch(dataBooks([]));
      dispatch(updateIndexBook(0))
      dispatch(clickedSearch(true));
    }
  };

  function onClick() {
    dispatch(dataBooks([]));
    dispatch(updateIndexBook(0))
    dispatch(clickedSearch(true));
  };


  return (
    <header className={styles.header}>

      <h1 className={styles.header_search}>Search for books</h1>

      <div>
        <input type="text" className={styles.input} placeholder='Начните поиск' value={search}
          onChange={handleChange}
          onKeyUp={(handleSubmit)}
        />
        <button className={styles.button} onClick={preventDefault(onClick)}><SearchIcon /></button>
      </div>

      <SortBlock />

    </header>

  );
}
