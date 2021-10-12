import React, { useState, useEffect } from "react";
import { Spin } from "antd";

import Mocky from "../axios/Mocky";
import "../styles/style.css";

const Images = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await Mocky.get("/5ecb5c353000008f00ddd5a0");
    setImages(response.data);
  };

  useEffect(() => {
    fetchImages();
  });

  const renderImages = () =>
    images.map((image) => (
      <img
        key={image.id}
        className=" ui image border-1 "
        alt="Woops"
        src={image.urls.small}
      ></img>
    ));

  if (!images.length) {
    return (
      <div className="example">
        <Spin />
      </div>
    );
  }

  return <div className="ui small images bodered">{renderImages()}</div>;
};

export default Images;
