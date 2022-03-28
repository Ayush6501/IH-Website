import React, { useState } from "react";
import { Box,Collapse,CardMedia, Container, Divider, Fade, Typography,Card, Avatar, Button } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ItemMaker(props) {

  const [expanded,setexpanded]=useState(false);

  function handleExpandClick()
  {
    setexpanded(!expanded);
  }


  return (
    <Box width={"10rem"} minHeight={"15rem"} sx={{position:"relative",borderRadius:"0.2rem", backgroundColor:"white",padding:"2rem"}}>
          <CardMedia
        component="img"
        height="200"
        sx={{marginBottom:"1rem"}}
        image={props.arg.img}
        />
          
          <Typography variant="h5" align="center" marginBottom={"2rem"} fontWeight="bold" fontFamily={"poppins"}>{props.arg.Title}</Typography>

          <Button
            size="small"
            sx={{bottom:"1rem",width:"10rem",align:"center",padding:0,margin:0,position:"absolute"}}
            onClick={handleExpandClick}
          >Read More</Button>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <p>
                {props.arg.Desc}
            </p>
          </Collapse>   
    </Box>
  );
}
