import React from 'react';
import styled from "styled-components";

const ImageBox = styled.article`
margin-bottom: 40px; box-shadow:5px 5px 10px #efefef; padding: 15px 15px 35px;
border: 1px solid $efefef;
img {width: 100%}
h2 {font-size: 30px; color: hotpink; margin-bottom: 20px;
text-transform: uppercase; }
ul { margin-bottom: 25px;
    li { margin-bottom: 5px}
}
p {
  span {
    display: inline-block; padding: 3px 20px; border-radius: 15px;
    background: #efefef; margin-right: 5px;
  }
}
`

const GalleryItem = ({item}) => {
  const {user, views, downloads, likes, webformatURL, tags} = item
  const tagList = tags.split(',')

  return (
    <ImageBox>
      <img src={webformatURL} alt="" />
      <h2>{user}</h2>
      <ul>
        <li>조회수:{views}</li>
        <li>다운로드:{downloads}</li>
        <li>좋아요:{likes}</li>
      </ul>
      <p>
        {tagList.map(tag => <span key={tag}>#{tag}</span>)}
      </p>
    </ImageBox>
  );
};

export default GalleryItem;