import React from 'react'
import { useParams, useParams } from 'react-router-dom'
import {Box, Typography} from "@mui/material"

const SinglePage = () => {
   const{title,description} = useParams()};
function Page() {
  return (
    <Box
    sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }}
    >
        <Typography variant='h2'gutterBottom>
            {title ? decodeURIComponent(title):"Default Title"}  
        </Typography>
        <Typography variant='body1'color='text.secondar'>
            {description ? decodeURIComponent(description):"Default Description"}
        </Typography>
        </Box>
  );
};

export default SinglePage;