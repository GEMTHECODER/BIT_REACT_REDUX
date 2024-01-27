import * as React from 'react';
import {useState} from 'react';
import {Box, Button, Container, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';

export const BuyDialog = ({item,buy}) => {
    const [numberOfBit, setNumberOfBit] = useState(0);
    const handleOnChange = (event) => {
        const {id, value} = event.target;
        setNumberOfBit(parseFloat(value) || 0); // Convert the input value to a number or default to 0
    };
    const handleBuy = () =>{
        const noOfCoinsToBuy = {
            numberOfCoin : numberOfBit,
        }
        buy(noOfCoinsToBuy)
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
                    <Typography variant={"h5"}>Buy BitCoin</Typography>

                    <TextField
                        label={"Amount of bitCoin"}
                        id={"inputBitCoin"}
                        value={numberOfBit}
                        onChange={handleOnChange}
                    >
                    </TextField>

                    <Button variant={"contained"} onClick={handleBuy}>
                        BUY
                    </Button>
                </Box>

            </Container>
        </>
    )

}
