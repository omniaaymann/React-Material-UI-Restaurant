import React from "react";
import {
  ImageList,
  ImageListItem,
  Typography,
  Button,
  Container,
  Grid,
  Stack,
  Rating,

} from "@mui/material";
export const Cards = () => {
  return (
    <div>
      <Container>
        {" "}
        <br />
        <br />
        <Typography variant="h3" color="#fb8500" sx={{ fontStyle: "bolder" }}>
          PICK FROM OUR BEST SELLER RESTAURANTS
        </Typography>
        <Stack direction="column">
          
            <ImageList cols={6}>
              {itemData.map((item) => (
                
                <ImageListItem key={item.img}>
                 
                    <img src={`${item.img}`} />{" "}
                    
                    <Rating></Rating>
                
                  
                </ImageListItem>
                
              ))}
            </ImageList>

        </Stack>
      </Container>
    </div>
  );
};

const itemData = [
  {
    img: "https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/220px-McDonald%27s_logo.svg.png",
    title: "Breakfast",
  },
  {
    img: "https://storage.eu.content-cdn.io/am-resources/8e05005e-5364-4850-94cf-2e54e2242528/Images/ProductImages/Source/fillet-480-260-en.jpg",
    title: "Burger",
  },
  {
    img: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0a955179-d2cd-4a7a-8377-42271f627642.jpg",
    title: "Camera",
  },
  {
    img: 'https://s3.us-east-2.amazonaws.com/sie-development-production/events/thumbnails/000/000/020/original/pizza.jpeg?1598292721',
    title: 'Coffee'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnZKnycR9bhBkmym_9b-erTY4ZfqfS4dasMEBd9F18ljwtL5q7X1GdVFmC7_AWi0Itnw&usqp=CAU',
    title: 'Hats'
  },{
    img: "https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/220px-McDonald%27s_logo.svg.png",
    title: "Breakfast",
  },
  {
    img: "https://storage.eu.content-cdn.io/am-resources/8e05005e-5364-4850-94cf-2e54e2242528/Images/ProductImages/Source/fillet-480-260-en.jpg",
    title: "Burger",
  },
  {
    img: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0a955179-d2cd-4a7a-8377-42271f627642.jpg",
    title: "Camera",
  },
  {
    img: 'https://s3.us-east-2.amazonaws.com/sie-development-production/events/thumbnails/000/000/020/original/pizza.jpeg?1598292721',
    title: 'Coffee'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnZKnycR9bhBkmym_9b-erTY4ZfqfS4dasMEBd9F18ljwtL5q7X1GdVFmC7_AWi0Itnw&usqp=CAU',
    title: 'Hats'
  },
  {
    img: 'https://s3.us-east-2.amazonaws.com/sie-development-production/events/thumbnails/000/000/020/original/pizza.jpeg?1598292721',
    title: 'Coffee'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnZKnycR9bhBkmym_9b-erTY4ZfqfS4dasMEBd9F18ljwtL5q7X1GdVFmC7_AWi0Itnw&usqp=CAU',
    title: 'Hats'
  },
];
