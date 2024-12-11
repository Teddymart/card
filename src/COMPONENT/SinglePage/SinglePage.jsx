import { Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";

const SinglePage = () => {
    const { id } = useParams( );
        const [data, setData] = React.useState(null);
        const [loading, setGetLoading] = React.useState(true);
        const [error, seterror] = React.useState(null);
        console.log("id userparam", id);
        const override = {
          display: "block",
          margin: "200px auto",
          borderColor: "black",
        };
        
        React.useEffect(() =>
        {
          if (!id /isNaN(Number(id))){
            console.error('invalid id params', id);
            seterror(new Error('invalid provider'));
            return;
          }
            const getPostId = async () => {
                let url= `https://jsonplaceholder.typicode.com/Post/${id}`;
    try {
      setGetLoading(true);
      const res = await axios.get(url);
      console.log(res);

      setData(res.data);
      setGetLoading(false);
      seterror(null);
    } catch (err) {
      seterror(err.message);
    }finally {
      setGetLoading(false);
    }
};
getPostId();
}, [id]);

if(loading)
  return ( 
    <CircleLoader
           loading={loading}
           cssOverride={override}
           size={150}
           aria-label="Loading Spinner"
           data-testid="loader" />
)
if (error) return <h1 style={{ color: "red" }}>
  ERROR: {error}</h1>;
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
    <Typography variant='h2' gutterBottom>
    {" "}
    title:{data.title}
    </Typography>
    <Typography variant='body1' color='text.secondary'>
        {data.body}{""}
        </Typography>
        </Box>
    );
   

}

export default SinglePage