const jsonSource = require('./input.json');
const inputJson = {
    "start": "2022-02-27T09:53:22Z",
    "end": "2022-05-07T09:53:22Z"
}

const filterFunction = (i) => {

    let individualInvestment = [];
    let totalInvestment;
    let currruntIndividualAmount = [];
    let totalCurruntAmount;

    const arr1 = jsonSource.filter((e) => {
        if (e.transaction_type == 'BUY' && new Date(i.start).getTime() <= new Date(e.trade_time).getTime() && new Date(i.end).getTime() >= new Date(e.trade_time).getTime()) {
            return true;
        }
        return false;
    });
    arr1.map((a) => {
        individualInvestment.push(parseInt(a.price * a.quantity));
    });

    const arr2 = jsonSource.filter((e) => {
        if (e.transaction_type == 'SELL' && new Date(i.start).getTime() <= new Date(e.trade_time).getTime() && new Date(i.end).getTime() >= new Date(e.trade_time).getTime()) {
            return true;
        }
        return false;
    });
    arr2.map((a) => {
        currruntIndividualAmount.push(parseInt(a.price * a.quantity));
    });

    // added total from all transactions
    totalInvestment = individualInvestment.reduce((a, b) => a + b, 0)
    totalCurruntAmount = currruntIndividualAmount.reduce((a, b) => a + b, 0)

    return {
        profit_loss_amount: totalCurruntAmount - totalInvestment,
        invested_amount: totalInvestment,
        current_amount: totalCurruntAmount,
        profit_loss_percentage: `${parseInt((totalCurruntAmount - totalInvestment) / totalInvestment * 100)}%`
    }

}

const fFunction = filterFunction(inputJson);
console.log('fFunction', fFunction);