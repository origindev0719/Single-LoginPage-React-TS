import React from "react";

type ImageProps = {
  src?: string;
  alt?: string;
  className?: string;
};

const Image: React.FC<ImageProps> = (props) => (
  <img src={props.src} alt={props.alt} className={props.className} />
);

export default Image;
