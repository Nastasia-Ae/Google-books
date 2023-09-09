import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from '../../icons';
import styles from './book.css';

interface BookProps {
  id?: string ,
  volumeInfo?: {
    image?: string,
    categories?: string,
    title?: string,
    authors?: string,
    imageLinks?: any,
    categoriesAll?: string,
    description?: string
  }
}


export function Book({item}: BookProps | any) {

  const [showDetail, setshowDetail] = useState(false);
  const navigate = useNavigate();
  const node = document.querySelector('#modal_root');
  if (!node) return null;
  const idDetail = "_detail";

  const categoriesAll = item.volumeInfo.categories || '';
  const image = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail || '';
  let categories = item.volumeInfo.categories || '';
  const title = item.volumeInfo.title || '';
  const authors = item.volumeInfo.authors || '';
  const description = item.volumeInfo.description;

  if (categories.length > 1) {

    categories = categoriesAll[0];

  };

  useEffect(() => {

    if (showDetail === true) {

      navigate(`/books/${item.id}`)
      
    }

  }, [showDetail])

  return (


     <li className={styles.book}>
  
        <div id={item.id}
          onClick={() => {setshowDetail(true)}}>
          <img src={image} alt="" className={styles.img} />
          <div className={styles.categories}>{categories}</div>
          <h3 className={styles.title}>{title} </h3>
          <p className={styles.authors}>{authors} </p>

        </div>
        {ReactDOM.createPortal(showDetail && (

          <Link  to={`/books/${item.id}`} className={styles.detail} id={item.id+ idDetail}>
            <button className={styles.close} onClick={() => {
              setshowDetail(false)
              navigate(-1)
            }}>
              <CloseIcon />
            </button>

            <div className={styles.detail_group}>
              <img src={image} alt="" className={styles.img_detail} />
              <div className={styles.categories}>{categoriesAll} </div>
              <h3 className={styles.title}>{title} </h3>
              <p className={styles.authors}>{authors} </p>
            </div>

            <p className={styles.description}>{description} </p>

          </Link>


        ), node)}

   


</li>


  );


}

