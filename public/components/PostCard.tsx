import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PublishedWithChanges } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard(props: any) {

  return (
    <Card sx={{ maxWidth: 345, height: 'fit-content', cursor: 'pointer' }}>
      <Tooltip title={'Click to View/Edit'}>
        <CardMedia
          component="img"
          height="194"
          image="static/images/default-post-image.jpeg"
          alt="Paella dish"
        /></Tooltip>
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.subheader ? `Published: ${props.subheader}` : 'Not Published Yet'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'flex-end' }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button variant='contained' color='success' aria-label="publish" style={{ padding: 3, textTransform: 'none' }}>
          {'Publish'}<PublishedWithChanges />
        </Button>
      </CardActions>
    </Card>
  );
}
