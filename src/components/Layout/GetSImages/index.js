import React from 'react';
import { List, Wrapper, ImageRow, Image, Link, ImageName } from './styled';

export default ({ images }) => {
  console.log(images);
  return (
    <Wrapper>
      <List>
        {
          images.map((image, index) => (
            <ImageRow key={index}>
              <Link target="_blank" href={image}><Image src={image}></Image></Link>
              <ImageName>{image.replace(/^.*(\\|\/|:)/, '')}</ImageName>
            </ImageRow>
          ))
        }
      </List>
    </Wrapper>
  )
}
