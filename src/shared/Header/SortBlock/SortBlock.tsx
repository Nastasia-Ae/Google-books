import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataBooks, RootState, updateBookListShow, updateIndexBook, valueCategoriesUpdate, valueSortingUpdate } from '../../../store';
import styles from './sortblock.css';

export function SortBlock() {
  
  const valueSorting= useSelector<RootState, string>(state => state.valueSorting);
  const valueCategories = useSelector<RootState, string>(state => state.valueCategories);
  const dispatch = useDispatch();


  function changeSelectCategories(ev: ChangeEvent<HTMLSelectElement>) {
    dispatch(updateBookListShow(false)); 
    dispatch(dataBooks([]));
    dispatch(updateIndexBook(0))
    dispatch(valueCategoriesUpdate(ev.target.value));

  }

  function changeSelectSorting(ev: ChangeEvent<HTMLSelectElement>) {
    dispatch(updateBookListShow(false)); 
    dispatch(dataBooks([]));
    dispatch(updateIndexBook(0))
    dispatch(valueSortingUpdate(ev.target.value));
  }
  return (
    <div  className={styles.selectList}>


    <select className={styles.select} value={valueCategories} required name="" id="" onChange={changeSelectCategories}>

      <optgroup label="Categories"></optgroup>
      <option value="" >All</option>
      <option value="art">art</option>
      <option value="biographyт">biography</option>
      <option value="computers">computers</option>
      <option value="history">history</option>
      <option value="medical">medical</option>
      <option value="poetry">poetry</option>
    </select>

    <select className={styles.select} value={valueSorting} required name="" id="" onChange={changeSelectSorting}>
      <optgroup label="Sorting by"></optgroup>
      <option value="relevance">relevance</option>
      <option value="newest">newest</option>
    </select>
    </div>

  );
}
