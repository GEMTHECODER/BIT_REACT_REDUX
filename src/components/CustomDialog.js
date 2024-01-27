import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {ExchangeDialog} from "./ExchangeDialog";
import {ACTION_BUY} from "../redux/CryptoConstants";
import {BuyDialog} from "./BuyDialog";

export function CustomDialog({open, onClose, item ,handleExchange: handleAction,action}) {
    const handleClose = () => {
        onClose(false);
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} textAlign={"center"}
                    sx={{
                        color: 'success.main',
                        '& .MuiPaper-root': {
                            borderRadius: '20px',
                            width: '50%'
                        }
                        ,
                        '& .MuiSlider-thumb': {
                            borderRadius: '40px',
                        },
                    }}
            >
                {
                    action === ACTION_BUY ? <BuyDialog item={item} buy={handleAction} /> :
                        <ExchangeDialog item={item} callExchange={handleAction}/>
                }

            </Dialog>
        </>
    );
}
