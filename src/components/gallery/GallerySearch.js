import React, { useState } from 'react';
import styled from "styled-components";

const ImageSearch = styled.form`
  padding: 30px; text-align: center;
  input {
    width: 400px; height: 50px;
    box-sizing:border-box; outline:none; padding: 0 20px;
    font-size: 16px;
  }
  button {
    width: 120px; height: 50px; border:none; background: #000;
    color: #fff; vertical-align: top;
  }
`

const GallerySearch = ({onSearch}) => {
  const [ text, setText ] = useState('')
  const onSubmit = (e) => {
    e.preventDefalut()
    if(!text) return
    onSearch( text )
  }

  return (
    <ImageSearch onSubmit={onSubmit}>
      <input type="text" placeholder="검색어를 입력하세요" value={text}
      onChange={e => setText(e.target.value) } />
      <button type="submit">검색</button>
    </ImageSearch>
  );
};

export default GallerySearch;