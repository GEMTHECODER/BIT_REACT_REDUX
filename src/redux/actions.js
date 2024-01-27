// actions.js
export const EXCHANGE_COIN = 'EXCHANGE_COIN';
export const BUY_COIN = 'BUY_COIN';

export const exchangeCoin = (selectedCoin) => ({
    type: EXCHANGE_COIN,
    payload: selectedCoin,
});

export const buyCoin = (selectedCoin) => ({
    type: BUY_COIN,
    payload: selectedCoin,
});