import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function RightCard() {
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



    return (
        <>
            <Card sx={{ maxWidth: 700, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardHeader />
                <CardContent>
                    <Typography variant="body2" borderRadius="10px">

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: "10px" }}>
                            <Typography gutterBottom fontWeight='bold' variant="h5"
                                textAlign='center' component="div">
                                User's Schedule
                                <Typography gutterBottom fontWeight='bold' color="grey" variant="p"
                                    textAlign='center' paragraph>
                                    2 Upcoming Meeting

                                </Typography>
                            </Typography> <br></br>

                            <Typography component="div" lineHeight="" color="" >
                                <Button variant="outlined" size="medium" color="primary" bgColor="skyblue" fontWeight='bold'>
                                    Add Schedule
                                </Button>
                            </Typography>
                        </Box>
                    </Typography>

                    <Stack spacing={5} size="large" alignItems="center">
                        <Pagination count={10} color="primary" />
                        \
                    </Stack>
                    <br></br>

                    <Typography variant="body2" borderLeft="4px solid lightgrey" component="div" >

                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: "10px" }}>

                            <Typography variant='p' color="grey">13.00PM - 14.00PM <br></br>
                                <Typography variant="p" fontWeight="bold" color="black">Development Team Capacity Review
                                    <Typography>Lead by <strong color="skyblue">Kendell Trevor</strong></Typography>
                                </Typography>
                            </Typography>

                            <Box

                            />
                            <Typography component="div" lineHeight="" color="" >
                                <Button variant="outlined" size="medium" color="primary" bgColor="skyblue" fontWeight='bold'>
                                    View
                                </Button>
                            </Typography>
                        </Box>
                    </Typography>

                    <br></br><br></br>

                    <Typography variant="body2" borderLeft="4px solid lightgrey" component="div" >

                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: "10px" }}>

                            <Typography variant='p' color="grey">16;30 = 17;30 PM<br></br>
                                <Typography variant="p" fontWeight="bold" color="black">Marketing Campaign Discussion
                                    <Typography>Lead by <strong color="skyblue">David Stevenson</strong></Typography>
                                </Typography>
                            </Typography>

                            <Box

                            />
                            <Typography component="div" lineHeight="" color="" >
                                <Button variant="outlined" size="medium" color="primary" bgColor="skyblue" fontWeight='bold'>
                                    View
                                </Button>
                            </Typography>
                        </Box>
                    </Typography>
                    <br></br><br></br>


                    <Typography variant="body2" borderLeft="4px solid lightgrey" component="div" >

                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: "10px" }}>

                            <Typography variant='p' color="grey">13;00 = 14;00 PM <br></br>
                                <Typography variant="p" fontWeight="bold" color="black">9 Degree Project Estimation Meeting
                                    <Typography>Lead by <strong color="skyblue">Mark Randall</strong></Typography>
                                </Typography>
                            </Typography>

                            <Box

                            />
                            <Typography component="div" lineHeight="" color="" >
                                <Button variant="outlined" size="medium" color="primary" bgColor="skyblue" fontWeight='bold'>
                                    View
                                </Button>
                            </Typography>
                        </Box>
                    </Typography>

                </CardContent>
                <CardActions disableSpacing >
                </CardActions>
            </Card>
            <br></br>

            <Card sx={{ maxWidth: 700, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardHeader />
                <CardContent>
                    <Typography variant="body2" borderRadius="10px">

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: "10px" }}>
                            <Typography gutterBottom fontWeight='bold' variant="h5"
                                textAlign='center' component="div">
                                User's Task
                                <Typography gutterBottom fontWeight='bold' color="grey" variant="p"
                                    textAlign='center' paragraph>
                                    Total 25 tasks in backlog

                                </Typography>
                            </Typography> <br></br>

                            <Typography component="div" lineHeight="" color="" >
                                <Button variant="outlined" size="medium" color="primary" bgColor="skyblue" fontWeight='bold'>
                                    + Add Schedule
                                </Button>
                            </Typography>
                        </Box>
                    </Typography>
                    <br></br>
                    <Typography variant="body2" borderLeft="4px solid lightgrey" component="div" >
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: "10px" }}>
                            <Typography variant="p" fontWeight="bold" color="black">Create FureStibe branding logo
                                <Typography>Due in 1 day <strong color="skyblue">Karina Clark</strong></Typography>
                            </Typography>
                            <Box
                            />
                            <Typography component="div" lineHeight="" color="" >
                                {/* <Button variant="outlined" size="medium" color="primary" bgColor="skyblue" fontWeight='bold'>
                                    View
                                </Button> */}
                            </Typography>
                        </Box>
                    </Typography>
                    <br></br><br></br>
                    <Typography variant="body2" borderLeft="4px solid lightgrey" component="div" >
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: "10px" }}>
                            <Typography variant="p" fontWeight="bold" color="black">Schedule a meeting with FireBear CTO John
                                <Typography>Due in 2 day <strong color="skyblue">Rober due</strong></Typography>
                            </Typography>
                            <Box
                            />
                        </Box>
                    </Typography>
                    <br></br><br></br>
                    <Typography variant="body2" borderLeft="4px solid lightgrey" component="div" >
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: "10px" }}>
                            <Typography variant="p" fontWeight="bold" color="black">9 Degree Project Estimation Meeting
                                <Typography>Due in 1 week <strong color="skyblue">Neil Owen</strong></Typography>
                            </Typography>
                            <Typography component="div" lineHeight="" color="" >
                            </Typography>
                        </Box>
                    </Typography>
                    <br></br><br></br>
                    <Typography variant="body2" borderLeft="4px solid lightgrey" component="div" >
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: "10px" }}>
                            <Typography variant="p" fontWeight="bold" color="black">Dashboard UI & UX for Leafr CRM
                                <Typography>Due in 2  week <strong color="skyblue">Olivia Neil</strong></Typography>
                            </Typography>
                            <Box
                            />
                        </Box>
                    </Typography>
                    <br></br><br></br>
                    <Typography variant="body2" borderLeft="4px solid lightgrey" component="div" >
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: "10px" }}>
                            <Typography variant="p" fontWeight="bold" color="black">Mivy App R&D, Meeting with clients
                                <Typography>Due in 3 week <strong color="skyblue">Sean Bean</strong></Typography>
                            </Typography>
                            <Box
                            />
                            <Typography component="div" lineHeight="" color="" >
                            </Typography>
                        </Box>
                    </Typography>
                </CardContent>
            </Card>
        </>

    );
}