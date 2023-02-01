import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import rop from './images/rop.jpeg'
import images from './images/images.jpg'
import google from './images/google.png'
import github from './images/github.png'
import slack from './images/slack.png'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export default function LeftCard() {
    const [user, setUser] = useState([])
    const fetchData = () => {
        fetch('http://localhost:4000/api/v1/Read')
            .then((response) => {
                return response.json();
            }).then((data) => {
                // console.log(data)
                const users = data.result
                console.log(users)
                setUser(users)
            })
    }


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [loading, setLoading] = React.useState(true);
    function handleClick() {
        setLoading(true);
    }

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));


    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardHeader
                    avatar={
                        <Avatar xl={{ bgcolor: red[500] }} aria-label="recipe">
                            <Box height={200} width={200}
                                component="img"
                                sx={{
                                    height: 50,
                                    width: 50,
                                    maxHeight: { xs: 500, md: 500 },
                                    maxWidth: { xs: 350, md: 250 },
                                }}
                                alt="profile image"
                                src={images}
                            />
                        </Avatar>
                    }
                />
                {user.map(data => (<div>
                    <CardContent key={data.id.value} >
                        <Typography gutterBottom fontWeight='bold' variant="h5"
                            textAlign='center' component="div">
                            {data.name}
                        </Typography>
                        <Typography variant="body2" fontWeight='bold' color="primary" textAlign='center' >
                            Administration
                        </Typography>
                        <br></br>
                        <Typography gutterBottom fontWeight='bold' paragraph component="div" textAlign='center' >
                            Assigned Trick
                        </Typography>
                        <Typography sx={{ display: 'flex', justifyContent: "center", gap: "30px" }} >
                            <Typography component="div" height="50px" width="50px" border="solid 1px grey" fontWeight='bold' color="grey" textAlign='center' >
                                243
                                Total
                            </Typography>
                            <Typography component="div" height="50px" width="50px" border="solid 1px grey" fontWeight='bold' color="grey" textAlign='center' >
                                56
                                Total
                            </Typography>
                            <Typography component="div" height="50px" width="50px" border="solid 1px grey" fontWeight='bold' color="grey" textAlign='center' >
                                183
                                Total
                            </Typography>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing >
                        <Typography gutterBottom fontWeight='bold' paragraph
                            component="div">
                            Details
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                            <Button variant="outlined" size="small" color="primary" fontWeight='bold' float="float-end">
                                Edit
                            </Button>
                        </Typography>
                    </CardActions>

                    <Collapse in={expanded} timeout="auto" unmountOnExit  >
                        <CardContent display="flex" alignItems='left'>

                            <Typography gutterBottom fontWeight='bold' paragraph
                                component="div">
                                Account ID
                                <Typography paragraph color="grey">{data.account_id} </Typography>


                            </Typography>

                            <Typography gutterBottom fontWeight='bold' paragraph
                                component="div">
                                Email
                                <Typography paragraph color="grey">{data.email}</Typography>


                            </Typography>


                            <Typography gutterBottom fontWeight='bold' paragraph
                                component="div">
                                Address:
                                <Typography paragraph color="grey">
                                    {data.address}

                                </Typography>


                            </Typography>


                            <Typography gutterBottom fontWeight='bold' paragraph
                                component="div">
                                Language
                                <Typography paragraph color="grey">
                                    {data.language}</Typography>


                            </Typography>


                            <Typography gutterBottom fontWeight='bold' paragraph
                                component="div">
                                Last Login
                                <Typography paragraph color="grey">
                                    {data.last_login}
                                </Typography>


                            </Typography>
                            <br></br>
                            <br></br>

                        </CardContent>
                    </Collapse>

                </div>))}

            </Card>
            <br></br>
            {/* 
        // social icons */}

            <Card sx={{ maxWidth: 345 }}>

                <CardContent alignItems="center">
                    <Typography gutterBottom variant="h5" component="div" fontWeight='bold'>
                        Connected Accounts

                    </Typography>
                    <br></br>
                    <Typography variant="body2" border="3px dashed skyblue" borderRadius="10px">

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: "10px" }}>

                            <Box
                                component="img"
                                sx={{
                                    height: 50,
                                    width: 50,
                                    maxHeight: { xs: 233, md: 167 },
                                    maxWidth: { xs: 350, md: 250 },
                                }}
                                alt="The house from the offer."
                                src={rop}
                            />
                            <Typography component="div" lineHeight="" color="" >
                                By connecting an account
                                you hereby agree to our <Typography color="skyblue" >
                                    <strong > privacy policy</strong> and   <strong > Terms of  <br></br>Use</strong></Typography>

                            </Typography>
                        </Box>
                    </Typography>

                    <br></br><br></br>


                    {/* icons google slack and github */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>

                        <Box
                            component="img"
                            sx={{
                                height: 50,
                                width: 50,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="The house from the offer."
                            src={google}
                        />
                        <Typography component="div" lineHeight="" color="black" fontWeight="bold">
                            Google <Typography color="grey" >
                                Plan properly Work flow</Typography>

                        </Typography>
                        <FormControlLabel
                            sx={{
                                display: 'block',
                            }}
                            control={
                                <Switch
                                    checked={loading}
                                    onChange={() => setLoading(!loading)}
                                    name="loading"
                                    color="primary"
                                />
                            }

                        />
                    </Box>

                    <hr></hr>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: "12px" }}>

                        <Box
                            component="img"
                            sx={{
                                height: 50,
                                width: 50,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="The house from the offer."
                            src={github}
                        />
                        <Typography component="div" lineHeight="" color="black" fontWeight="bold">
                            Github <Typography color="grey" >
                                Keep eyes on your Responsibilities</Typography>

                        </Typography>
                        <FormControlLabel
                            sx={{
                                display: 'block',
                            }}
                            control={
                                <Switch
                                    checked={loading}
                                    onChange={() => setLoading(!loading)}
                                    name="loading"
                                    color="primary"
                                />
                            }

                        />
                    </Box>


                    <hr></hr>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: "12px" }}>

                        <Box
                            component="img"
                            sx={{
                                height: 50,
                                width: 50,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="The house from the offer."
                            src={slack}
                        />
                        <Typography component="div" lineHeight="" color="black" fontWeight="bold">
                            slack <Typography color="grey" >
                                Integrate Projects
                                Discussions</Typography>

                        </Typography>
                        <FormControlLabel
                            sx={{
                                display: 'block',
                            }}
                            control={
                                <Switch
                                    checked={loading}
                                    onChange={() => setLoading(!loading)}
                                    name="loading"
                                    color="primary"
                                />
                            }

                        />
                    </Box>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="medium" color="primary" bgColor="skyblue" fontWeight='bold'>
                        save changes
                    </Button>

                </CardActions>
            </Card>
        </>

    );
}