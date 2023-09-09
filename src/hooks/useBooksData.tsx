import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clickedSearch, dataBooks, errorLoading, RootState, stateLoading, totalItems, updateBookListShow } from "../store";



export function useBooksData() {

  const dataBooksList = useSelector<RootState, []>(state => state.dataBooks);
  const indexBook = useSelector<RootState, number>(state => state.indexBook);
  const maxResult = useSelector<RootState, number>(state => state.maxResultStepBook);
  const search = useSelector<RootState, string>(state => state.search);
  const valueSorting = useSelector<RootState, string>(state => state.valueSorting);
  const clicked = useSelector<RootState, boolean>(state => state.clickedSearch);
  const valueCategories = useSelector<RootState, string>(state => state.valueCategories);

  const dispatch = useDispatch();

  useEffect(() => {

    async function load() {

      dispatch(stateLoading(true));
      dispatch(errorLoading(''));

      try {

        const data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${valueCategories}&orderBy=${valueSorting}&maxResults=${maxResult}&startIndex=${indexBook}&key=AIzaSyA5U8NzExxy_oJQL8G6gZlyUiJR2dlHJiw`, {});

        const result = dataBooksList.concat(data.data.items);
        dispatch(dataBooks(result));

        dispatch(totalItems(data.data.totalItems));
        dispatch(updateBookListShow(true))

      } catch (error) {
        dispatch(errorLoading(String(error)));
      }

      dispatch(stateLoading(false));
      dispatch(clickedSearch(false));

    }

    load()


  }, [clicked, indexBook, valueSorting, valueCategories])



  return [dataBooksList]
}