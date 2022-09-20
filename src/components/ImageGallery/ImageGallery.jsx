const ImageGallery = ({ imageArray }) => {
  return (
    <ul className="gallery">
      {imageArray.map(({ id, tags, webformatURL, largeImageURL }) => (
        <li key={id}>
          <img src={webformatURL} alt={tags} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
