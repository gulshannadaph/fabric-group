
export const findTransactionsByAmountAPI = (accountId , amount)=>{
   return  `https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${accountId}/transactions/amount/${amount}?timeout=30000`
}