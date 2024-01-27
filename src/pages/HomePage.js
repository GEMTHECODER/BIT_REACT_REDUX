import Header from "../components/Header";
import {UserCoinScoreBoard} from "../components/UserCoinScoreBoard";
import Coins from "../components/Coins";
import Container from "@mui/material/Container";
import {Typography} from "@mui/material";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CustomDialog} from "../components/CustomDialog";
import {exchangeCoin} from "../redux/actions";
import {ACTION_EXCHANGE} from "../redux/CryptoConstants";


let HomePage;

export default HomePage = () => {
    const dispatch = useDispatch();
    const userCoins = useSelector((state) => state.userCoins);
    const [currentUserCoin, setCurrentUserCoin] = useState({});
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const openExchange = (selectedCoin) => {
        setDialogOpen(true);
        setCurrentUserCoin(selectedCoin)
        console.log("+++++++++++++++" +
            "showing handle exchange and setting current user coin", JSON.stringify(selectedCoin));
    };
    const handleExchange = (userWantsToExchange) => {
        setDialogOpen(false)
        console.log("+++++++++++++++User wants to Exchange with", JSON.stringify(userWantsToExchange));
        dispatch(exchangeCoin({
            currentCoin: currentUserCoin,
            selectedCoin: userWantsToExchange.ToExchangeCoin,
            quantity: userWantsToExchange.numberOfCoin
        }));
    }

    return (
        <>
            <Header/>
            <UserCoinScoreBoard/>
            <UserCoinLayout userCoins={userCoins} handleClickOpen={openExchange}/>
            <CustomDialog item={currentUserCoin} open={dialogOpen} onClose={() => setDialogOpen(false)}
                          handleExchange={handleExchange}/>

        </>
    )
}


function UserCoinLayout({userCoins, handleClickOpen}) {

    return (

        <Container maxWidth={"md"} sx={{border: '2px solid white', mt: 2}}>
            <Typography fontWeight={"300"} variant="h5" color="text.secondary" component="div">
                User Coins
            </Typography>
            {
                userCoins.map((item, index) => (
                    <Coins handleClickOpen={handleClickOpen} item={item} action={ACTION_EXCHANGE}/>
                ))
            }
        </Container>
    )


}