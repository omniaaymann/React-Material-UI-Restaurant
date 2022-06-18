import React from "react";
import {
  Grid,
  ImageList,
  ImageListItem,
  Typography,
  Button,
  Container,
} from "@mui/material";

export const Header = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item sm={12} md={12} lg={8}>
            <ImageList>
              <ImageListItem>
                <img
                  style={{ width: 700, height: 400 }}
                  src="https://img.freepik.com/free-vector/hands-holding-smartphone-with-mobile-app-order-asian-food_88138-867.jpg?t=st=1649243788~exp=1649244388~hmac=2944f86e21d1acf17b1dfcaab7a480748dbb46c42c857984595c61a6e937abf1&w=1060"
                />
              </ImageListItem>
            </ImageList>
          </Grid>

          <Grid item sm={12} md={12} lg={3}>
            <br />
            <br />
            <Typography
              variant="h3"
              color="#fb8500"
              sx={{ fontStyle: "bolder" }}
            >
              SAFE FOOD DELIVERY
            </Typography>
            

            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies vel orci non congue. 
            </Typography>

            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                marginBottom: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              style={{
                borderRadius: 35,
                backgroundColor: "#fb8500",
                padding: "10px 36px",
                fontSize: "18px",
              }}
            >
              SIGN UP
            </Button>
          </Grid>
        </Grid>

        <Grid container>
            <Grid item sm={12} md={3} lg={3}>

            </Grid>
        </Grid>
      </Container>
    </div>
  );
};
