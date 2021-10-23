import axios from "axios";
import {balances, conversion, createQuote} from "../../client/api";

export const send = async (
    sourceCurrency,
    targetCurrency,
    sourceAmount
) => {
    const options = {
        headers: {'Authorization': 'Bearer ad62bd55-903c-4c3d-b1ff-2b903aaa0a46'}
    }
    const response = await axios.get("https://api.sandbox.transferwise.tech/v1/profiles", options);
    const profileId = response.data[0].id;

    const quote = await createQuote(sourceCurrency, targetCurrency, sourceAmount, profileId);
    const quoteId = quote.data.id

    const borderlessAccount = await balances(profileId);
    const borderlessAccountId = borderlessAccount.data[0].id;
    return await conversion(borderlessAccountId, quoteId);
}