const json = require("./input.json");

function calculate(object1) {

  let total_buy_amount = 0;
  let total_sell_amount = 0;
  let output = {};
  epoch_start = Date.parse(object1.start);
  epoch_end = Date.parse(object1.end);

  for (let i of json) {
    let price = Number(i.price);
    let quantity = Number(i.quantity);
    let total_priceQuant = price * quantity;
    
    if (i.transaction_type == "BUY" && Date.parse(i.trade_time) >= epoch_start && Date.parse(i.trade_time) <= epoch_end) {
      total_buy_amount += total_priceQuant;
    } else if (i.transaction_type == "SELL" && Date.parse(i.trade_time) >= epoch_start && Date.parse(i.trade_time) <= epoch_end) {
      total_sell_amount += total_priceQuant;
    }
  }

  if (total_sell_amount == 0) {
    // If there is no SELL option within the provided time period
    output.profit_loss_amount = Number.parseFloat(0).toFixed(2);
  } else if (total_sell_amount > total_buy_amount) {
    // if we are selling the stocks at higher price than bought price (Profit)
    output.profit_loss_amount = Number.parseFloat(total_sell_amount - total_buy_amount).toFixed(2);
  } else {
    // if we are selling at lower price than bought price (Loss)
    output.profit_loss_amount = Number.parseFloat(0-total_sell_amount).toFixed(2);
  }

  output.invested_amount = Number.parseFloat(total_buy_amount).toFixed(2);
  output.current_amount = Number.parseFloat(Number(total_buy_amount) + Number(output.profit_loss_amount)).toFixed(2);

  // when no [BUY | SELL] option is observed within the provided time period
  if(output.invested_amount == 0){
    output.profit_loss_percentage = `0.00%`;
  } else {
    output.profit_loss_percentage = `${Number.parseFloat(((Number(output.current_amount) - Number(output.invested_amount)) /Number(output.invested_amount)) *100).toFixed(2)}%`;
  }

  return output;
}

console.log(
  calculate({
    start: "2022-02-27T09:53:22Z",
    end: "2022-02-27T09:53:22Z",
  })
);