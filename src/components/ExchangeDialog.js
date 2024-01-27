import * as React from 'react';
import {Box, Button, Container, Select, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import {useSelector} from "react-redux";

export const ExchangeDialog = ({item,callExchange}) => {
    const [numberOfBit, setNumberOfBit] = useState(0);
    const [toExchangeCrypto, setToExchangeCrypto] = useState(0);
    const handleOnChange = (event) => {
        const {id, value} = event.target;
        setNumberOfBit(parseFloat(value) || 0); // Convert the input value to a number or default to 0
    };
    const handleOnSelect = (event) => {
        const {id, value} = event.target;
        setToExchangeCrypto(value); // Convert the input value to a number or default to 0
    };

    const handleExchange = () =>{
        const handlingToExchangeWith = {
            numberOfCoin : numberOfBit,
            ToExchangeCoin : toExchangeCrypto
        }
        callExchange(handlingToExchangeWith)
    }

    return (
        <>
            <Container>
                <Box sx={{
                    mt: 5,
                    border: '2px solid #fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4
                }}>
                    <Typography variant={"h5"}>Exchange Bit Coin With</Typography>

                    <TextField
                        label={"Amount of bitCoin"}
                        id={"inputBitCoin"}
                        value={numberOfBit}
                        onChange={handleOnChange}
                    >
                    </TextField>

                    <CryptoDropDown handleSelectChange={handleOnSelect}/>

                    <Button variant={"contained"} onClick={handleExchange}>
                        Exchange
                    </Button>
                </Box>

            </Container>
        </>
    )

}


function CryptoDropDown({handleSelectChange}) {
    const cryptos = useSelector((state) => state.availableCoins);
    const [selectedCrypto, setSelectedCrypto] = useState(cryptos[0]);
    return (
        <>
            <Select
                label="Select Item"
                value={selectedCrypto.name}
                onChange={handleSelectChange}
            >
                {cryptos.map((item) => (
                    <MenuItem key={item.crypto} value={item}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </>

    )
}

