import { Grid, TextField, Link, Button, Container,   Switch,
  FormControlLabel} from "@mui/material";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <Container >
      <Grid
        container 
      >
        <Grid item sm={2} md={2} lg={2}>
          FoodDeliveryCompany
        </Grid>

        <Grid item sm={2} md={2} lg={2}>
            <Link underline='none'>Home</Link>
        </Grid>

        <Grid item sm={2} md={2} lg={2}>
            <Link underline='none'>Prdoucts</Link>
        </Grid>

        <Grid item sm={2} md={2} lg={2}>
            <Link underline='none'>Shop</Link>
        </Grid>

        <Grid item sm={2} md={2} lg={2}>
            <Link underline='none'>Contact Us</Link>
        </Grid>
        
        <Grid item sm={2} md={2} lg={2}>
        <FormControlLabel control={<Switch/>} label='Dark Mode'/>
        </Grid>

        
       
        
        {/* <Grid item sm={4} md={4} lg={4}>
          <TextField
            sx={{
              margin: 0,
            }}
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
          />
        </Grid> */}


      </Grid>
      </Container>
    </div>
  );
};
