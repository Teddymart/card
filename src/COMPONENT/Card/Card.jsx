import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Card from '@material-ui/core/Card';
import pealla from '../../assets/pealla.PNG';
import { Button } from '@mui/material';
// "/path/to/src/Card.jpg"


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard({title, subtitle, again}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const information = [
    {id: 1,
    title: "my main card",
    subheader: "21 April 2024",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum, repudiandae veniam ratione vel voluptatum. Dolorem obcaecati hic sapiente reprehenderit unde dolore iste delectus et quidem beatae explicabo, quibusdam adipisci."
  },
  {id: 2,
    title: "my second card",
    subheader: "22 April 2024",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum, repudiandae veniam ratione vel voluptatum. Dolorem obcaecati hic sapiente reprehenderit unde dolore iste delectus et quidem beatae explicabo, quibusdam adipisci."
  },
  {id: 3,
    title: "my third card",
    subheader: "23 April 2024",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum, repudiandae veniam ratione vel voluptatum. Dolorem obcaecati hic sapiente reprehenderit unde dolore iste delectus et quidem beatae explicabo, quibusdam adipisci."
  },
  {id: 4,
    title: "my fourth card",
    subheader: "24 April 2024",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum, repudiandae veniam ratione vel voluptatum. Dolorem obcaecati hic sapiente reprehenderit unde dolore iste delectus et quidem beatae explicabo, quibusdam adipisci."
  },
  {id: 5,
    title: "my fifth card",
    subheader: "24 April 2024",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum, repudiandae veniam ratione vel voluptatum. Dolorem obcaecati hic sapiente reprehenderit unde dolore iste delectus et quidem beatae explicabo, quibusdam adipisci."
  },
  {id: 6,
    title: "my sixth card",
    subheader: "24 April 2024",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum, repudiandae veniam ratione vel voluptatum. Dolorem obcaecati hic sapiente reprehenderit unde dolore iste delectus et quidem beatae explicabo, quibusdam adipisci."
  },
  {id: 7,
    title: "my seventh card",
    subheader: "24 April 2024",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum, repudiandae veniam ratione vel voluptatum. Dolorem obcaecati hic sapiente reprehenderit unde dolore iste delectus et quidem beatae explicabo, quibusdam adipisci."
  },
  {id: 8,
    title: "my eighth card",
    subheader: "24 April 2024",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum, repudiandae veniam ratione vel voluptatum. Dolorem obcaecati hic sapiente reprehenderit unde dolore iste delectus et quidem beatae explicabo, quibusdam adipisci."
  },
  {id: 9,
    title: "my ninth card",
    subheader: "24 April 2024",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum, repudiandae veniam ratione vel voluptatum. Dolorem obcaecati hic sapiente reprehenderit unde dolore iste delectus et quidem beatae explicabo, quibusdam adipisci."
  },
  {id: 10,
    title: "my tenth card",
    subheader: "24 April 2024",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum, repudiandae veniam ratione vel voluptatum. Dolorem obcaecati hic sapiente reprehenderit unde dolore iste delectus et quidem beatae explicabo, quibusdam adipisci."
  },
  ];
  console.log (information);
  const [readMore, setReadMore] = React.useState(false);

  let moredescription = information[0].description;
  console.log(moredescription);
  if (!readMore) {
    moredescription = moredescription.slice(0, 90) + "...";
  }
  console.log("more", moredescription);
  return (
    <div className='card-main'>
    {information.map((single,index) => (
   
        <Card sx={{ maxWidth: 345 }} key={single.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={single.title}
        subheader={single.subheader}
      />
      <CardMedia
        component="img"
        height="194"
        image={pealla}
        alt="Paella dish"
      />
      {
        // <img style={{height: "250vh", width: "100%"}}
        // src='/src/assest/sheep.jpg'alt='ffr'/>
      }
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>(title)
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>(substitle)
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            {again}
           {moredescription}
           <Button onClick={() => setReadMore((prevState) => !prevState)}>
               {" "}
            {readMore ? "Less" : "More"}
           </Button>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
 ))}
      </div>
  );
}
    
  
