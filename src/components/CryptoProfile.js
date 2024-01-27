// CryptoBuyPage.js
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {buyCoin} from '../redux/actions';
import {CustomDialog} from "./CustomDialog";
import {ACTION_BUY} from "../redux/CryptoConstants";
import Coins from "./Coins";
import Container from "@mui/material/Container";
import {Typography} from "@mui/material"; // Replace with your actual action

const CryptoProfile = () => {
    const dispatch = useDispatch();
    const availableCoins = useSelector((state) => state.availableCoins);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [currentUserCoin, setCurrentUserCoin] = React.useState({});

    const openBuyDialog = (selectedCoin) => {
        setCurrentUserCoin(selectedCoin)
        setDialogOpen(true);
        console.log("loggin the  coin user want to buy is +++++++++++++",JSON.stringify(selectedCoin),currentUserCoin)
    };
    const handleBuy = (selectedCoin) => {
        console.log("the  coin user want to buy is +++++++++++++",JSON.stringify(selectedCoin),currentUserCoin)
        // Replace with your logic for buying coins
        setDialogOpen(false);
        const finalCryptoCoin =
            {
                noOfBit: selectedCoin,
                userBoughtCoin: currentUserCoin
            }
        dispatch(buyCoin(finalCryptoCoin));
    };

    return (
        <>
            <CryptoCoinLayout availableCoins={availableCoins}  handleClickOpen={openBuyDialog}/>

            <CustomDialog item={currentUserCoin} open={dialogOpen} onClose={() => setDialogOpen(false)}
                          handleExchange={handleBuy} action={ACTION_BUY}/>
        </>


    );
};

export default CryptoProfile;


function CryptoCoinLayout({availableCoins,handleClickOpen}) {

    return (

        <Container maxWidth={"md"} sx={{border: '2px solid white', mt: 2}}>
            <Typography fontWeight={"300"} variant="h5" color="text.secondary" component="div">
                Crypto Coins
            </Typography>
            {
                availableCoins.map((item, index) => (
                    <Coins handleClickOpen={handleClickOpen} item={item} action={ACTION_BUY}/>
                ))
            }
        </Container>
    )


}