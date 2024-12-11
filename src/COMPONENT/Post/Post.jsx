import React from 'react';
import axios from "axios";
import { Button,Typography } from '@mui/material';
import { Info } from '@mui/icons-material';
import { CircleLoader } from 'react-spinners';
import { Link } from 'react-router-dom';


const Post = () => {
const [getInfo, setGetInfo] = React.useState([]);
const [loading, setGetLoading] = React.useState(false);
const [error, seterror] = React.useState(true);
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};

React.useEffect(() => {
  const getPost = async () => {
    let url =  "https://jsonplaceholder.typicode.com/posts";

    try {
      setGetLoading(true);
      const res = await axios.get(url);
      console.log(res);
      const fiveInfo = res.data.slice(0,5);
      console.log("fivedata",fiveInfo);
      setGetInfo(fiveInfo);
      setGetLoading(false);
      seterror(null);
    } catch (err) {
      seterror(err.message);
    }finally {
      setGetLoading(false);
    }
  };
  getPost();
}, []); 
  
 if (loading) return 
 <CircleLoader
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
 />

if (error) return <h1 style={{ color: "red" }}>
  ERROR: {error}</h1>;
  return (
    <div>
      {getInfo.map((Info) => (
        <ol key={Info.id}>
          <li style={{ textAlign: "center"}}>
            User unique id: {Info.userId}</li>

            <Typography variant='h5' style={{ color: "green"}}>
              Title: {Info.title}
            </Typography>
            <Typography variant='h6'> {Info.body}</Typography>
<Link to={`/Post/${Info.id}`}>
{" "}
<Button>Click Here</Button>{" "}
</Link>
        </ol>
      ))}
    </div>
  );
};
 

export default Post
