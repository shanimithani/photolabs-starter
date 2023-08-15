import React, {useState} from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ data, favoritedPhotoIds, toggleFavorite, openModal}) => {
  const { user, location, urls, id} = data;
  

  return (
    <div className="photo-list-item">
      <PhotoFavButton displayAlert={true} favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={toggleFavorite} photoId={id}/>
      <img src={urls.regular} alt={`Photo by ${user.username}`} className="photo-image" onClick={() => openModal(data)} />
      <div className="photo-details">
        <img src={user.profile} alt={`Profile of ${user.username}`} className="profile-image" />
        <div className="text-info">
          <p className="username">{user.username}</p>
          <p className="location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>

    </div>
  );
};


export default PhotoListItem;
