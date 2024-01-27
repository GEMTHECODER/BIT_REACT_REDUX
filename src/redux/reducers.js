import {BUY_COIN, EXCHANGE_COIN} from "./actions";

const initialState = {
    userCoins: [
        {id: 1, name: 'Bitcoin', quantity: 5},
        {id: 2, name: 'Ethereum', quantity: 10},
    ],
    availableCoins: [
        {id: 101, name: 'Litecoin', quantity: 20},
        {id: 102, name: 'Ripple', quantity: 15},
        {id: 1, name: 'Bitcoin', quantity: 5},
        {id: 2, name: 'Ethereum', quantity: 10},
        {id: 3, name: 'Tether', quantity: 10},
        {id: 4, name: 'BNB', quantity: 10},
        {id: 5, name: 'XRP', quantity: 10},
        {id: 6, name: 'USD', quantity: 10},
        {id: 7, name: 'Dogecoin', quantity: 10},
    ],
};

const exchangeCoinReducer = (state, {currentCoin, selectedCoin: selectedFromOptionCoin, quantity}) => {
    const coinExists = state.userCoins.some((coin) => coin.id === selectedFromOptionCoin.id);
    const currentCoinIndex = state.userCoins.findIndex((coin) => coin.id === currentCoin.id);

    let finalCoinAfterProcessing =
        coinExists ?
            state.userCoins.map((coin) => (
                coin.id === currentCoin.id && coin.quantity > 0
                    ? {...coin, quantity: coin.quantity - quantity}
                    : coin.id === selectedFromOptionCoin.id
                        ? {...coin, quantity: coin.quantity + quantity}
                        : coin
            ))
            :
            finalCOinAfterProcess();

    function finalCOinAfterProcess() {

        let updatedUserCoins = [...state.userCoins, {...selectedFromOptionCoin, quantity: quantity}];
        // Decrease the quantity of the current coin
        const currentCoinIndex = updatedUserCoins.findIndex((coin) => coin.id === currentCoin.id);
        if (currentCoinIndex !== -1 && updatedUserCoins[currentCoinIndex].quantity > 0) {
            updatedUserCoins[currentCoinIndex].quantity -= quantity;
        }
        return updatedUserCoins;

        const updatedAvailableCoins = state.availableCoins.map((coin) => {
            if (coin.id === selectedFromOptionCoin.id) {
                return {...coin, quantity: coin.quantity + 1};
            }
            return coin;
        });

        return {
            ...state,
            userCoins: finalCoinAfterProcessing,
            availableCoins: updatedAvailableCoins,
        };
    };
}

    const buyCoinReducer = (state, selectedCoin) => {
        const {noOfBit, userBoughtCoin} = selectedCoin;
        console.log("no of coin user wants to buy from the reducer", noOfBit)
        console.log("wanna have look at the reducer please from the reducer", userBoughtCoin)
        const isCoinInUserCoins = state.userCoins.some((coin) => coin.id === userBoughtCoin.id);

        const updatedUserCoins = isCoinInUserCoins
            ? state.userCoins.map((coin) => {
                if (coin.id === userBoughtCoin.id) {
                    console.log("the added coin to the userCoin is " + coin.quantity + noOfBit.numberOfCoin)
                    return {...coin, quantity: coin.quantity + noOfBit.numberOfCoin};
                }
                return coin;
            })
            : [...state.userCoins, {...userBoughtCoin, quantity: noOfBit.numberOfCoin}];


        const updatedAvailableCoins = state.availableCoins;

        return {
            ...state,
            userCoins: updatedUserCoins,
            availableCoins: updatedAvailableCoins,
        };

}

    const rootReducer = (state = initialState, action) => {
        switch (action.type) {
            case EXCHANGE_COIN:
                return exchangeCoinReducer(state, action.payload);
            case BUY_COIN:
                return buyCoinReducer(state, action.payload);
            default:
                return state;
        }
    };


export default rootReducer;
