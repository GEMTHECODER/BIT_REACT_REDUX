import * as React from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';

const Coins = ({handleClickOpen, item, action}) => {

    return (
        <>
            <Grid container justifyContent="center" alignItems="center"
                  sx={{mt: 1, border: '2px solid black', borderRadius: '18px'}}
                  spacing={0}>
                {/* Left section (about 1/3 of the space) */}
                <Grid item xs={3}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 3,
                            // height: '100%', // Ensure the height of the Box is 100% of its parent Grid item
                            padding: 2, // Add padding as needed
                        }}
                    >
                        <Typography variant="body1">icon</Typography>

                        <Typography variant="h6" gutterBottom>
                            {item.name}
                        </Typography>

                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant="body1">  {item.quantity}</Typography>
                </Grid>

                {/* Right section (button in the bottom right corner) */}
                <Grid item xs={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end', p: 2
                        }}
                    >
                        <Button variant="contained" sx={{width: '200px', borderRadius: '10px 10px'}}
                                color="primary"
                                onClick={() => handleClickOpen(item)}
                        >
                            {action}
                        </Button>

                    </Box>
                </Grid>
            </Grid>
        </>
    )

}
export default Coins;