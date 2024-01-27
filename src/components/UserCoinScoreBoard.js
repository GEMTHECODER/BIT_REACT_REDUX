import * as React from 'react';
import {Box, Card, CardContent, Container, Typography} from '@mui/material';
import {useSelector} from "react-redux";

export function UserCoinScoreBoard (){
    const userCoins = useSelector((state) => state.userCoins);
    const totalCryptoCoins = userCoins.reduce((total, coin) => total + coin.quantity, 0);

   return (
<Container maxWidth={"md"} sx={{mt: 4, padding: 0}}>

    <Card sx={{
        display: 'flex',
        justifyContent: 'space-around',
        borderRadius: '10px',
        border: '2px solid black',
        textAlign: 'center'
    }}>
        <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
            {/*<CardContent sx={{flex: '0 0 auto'}}>*/}
            <CardContent
                sx={{display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'space-between'}}>
                <Typography component="div" fontWeight={"700"} variant="h6">
                    Number of Crypto Coins Type
                </Typography>
                <Typography fontWeight={"700"} variant="subtitle1" color="text.secondary" component="div">
                    {userCoins.length}
                </Typography>
            </CardContent>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <CardContent
                sx={{display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'space-between'}}>
                <Typography component="div" fontWeight={"700"} variant="h6">
                    Number of Crypto Coins
                </Typography>
                <Typography fontWeight={"700"} variant="subtitle1" color="text.secondary" component="div">
                    {totalCryptoCoins}
                </Typography>
            </CardContent>
        </Box>
    </Card>
</Container>)
}
