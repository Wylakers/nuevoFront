import React from "react";
import Card from "./Card";
import image1 from '../Resources/image1.jpg';
import image2 from '../Resources/image2.jpg';
import image3 from '../Resources/image3.jpg';


const cards = [
  {
    id: 1,
    title: "INFLUENCER 1",
    image: image1,
    url: "https://youtube.com",
  },
  {
    id: 2,
    title: "INFLUENCER 2",
    image: image2,
    url: "https://youtube.com",
  },
  {
    id: 3,
    title: "INFLUENCER 3",
    image: image3,
    url: "https://youtube.com",
  },
];

function SInfluencers() {
  return (
    <div  className="container d-flex justify-content-center align-items-center h-100">
      <div className="row" >
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SInfluencers;