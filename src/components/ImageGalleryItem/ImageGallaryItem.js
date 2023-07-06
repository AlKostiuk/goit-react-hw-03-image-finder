import style from './imagegallaryitem.module.css'



const ImageGalleryItem = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };

  return(
    <li className={style.galleryitem} onClick={handleClick}>
  <img className={style.galleryitemimg} src={item.webformatURL} alt="" />
</li>
  )



}


export default ImageGalleryItem
