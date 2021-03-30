    import React, { useEffect, useState } from 'react';
    import { useParams } from 'react-router';
    import { makeStyles } from '@material-ui/core/styles';
    import Card from '@material-ui/core/Card';
    import CardContent from '@material-ui/core/CardContent';
    import Typography from '@material-ui/core/Typography';
    import './Detail.css'
    import FacebookIcon from '@material-ui/icons/Facebook';
    import { Link } from 'react-router-dom';
    import YouTubeIcon from '@material-ui/icons/YouTube';
    import { blue, green, red } from '@material-ui/core/colors';


    const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    });
    const Detail = () => {

    const classes = useStyles();
 
    const {id}=useParams()
  

    const [corDetails,setcorDetails]=useState({})

    useEffect(() => {


        fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setcorDetails(result)
        })
    },[])

    


    
    return (<div className="detail">
        <Card className={classes.root} variant="outlined">
        <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {corDetails.rank}
          </Typography>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
          {corDetails.id}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          {corDetails.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {corDetails.development_status}
          </Typography>
          
          <Typography className={classes.pos} color="textSecondary">
          {corDetails.org_structure}
          </Typography>
          <Typography color="primary" variant="h5" component="h2">
            {corDetails.proof_type}
          </Typography>
         
          <Typography className={classes.pos} style={{ color:blue}}>
          {corDetails.description}
          </Typography>
          <Typography variant="body2" component="p">
          first_data_at:     {corDetails.first_data_at}
          </Typography>
          <Typography variant="body2" component="p">
          last_data_at:     {corDetails.last_data_at}
          </Typography>
          <Typography variant="body2" component="p">
           <Link><FacebookIcon></FacebookIcon></Link> 
           <Link ><YouTubeIcon style={{ color: red[500] }}></YouTubeIcon></Link> 
         
          </Typography>
        </CardContent>
     
      </Card></div>
    );
};

export default Detail;