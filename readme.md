# Problem Statement - General Coding

```json
{
  "name": "Reliance Industries Limited",
  "ticker": "RELIANCE",
  "transaction_type": "BUY" | "SELL",
  "price": "2350.55",
  "quantity": "55",
  "stock_type": "LARGECAP" | "MIDCAP" | "SMALLCAP",
  "sector": "chemicals",
  "trade_time": "2022-02-27T09:53:22Z"
}
```
The above JSON structure is of a transaction of a stock. You will be given an array of stock transaction as input JSON file.

<br/>
<br/>

### Problem-1
---
Write a function that returns the profit/loss amount, invested amount, current amount and profit/loss percentage, given input as a `trade_time` range. If there are no transactions in that range, return 0 as value for all fields.

Sample Input:
```json
{
  "start": "2022-02-27T09:53:22Z",
  "end": "2022-03-27T09:53:22Z"
}
```

Sample Output:
```json
{
  "profit_loss_amount": "-6700",
  "invested_amount": "100000",
  "current_amount": "93300",
  "profit_loss_percentage": "-6.7%"
}
```

### Problem-2
---
Write a function that would take in filter as input on the following attributes and return array of transaction history that matches those filters.
* transaction_type
* trade_time range
* sector
* stock_type
* price_range
* quantity range

Sample Input 1:
```json
{
  "transaction_type": "BUY",
  "trade_time": ["2022-02-27T09:53:22Z", "2022-03-27T09:53:22Z"],
  "sector": ["chemicals", "manufacturing"],
  "stock_type": ["LARGECAP"],
  "price": [1000, 3000],
  "quantity": [10, 5000]
}
```
Sample Input 2:
```json
{
  "trade_time": ["2022-02-27T09:53:22Z", "2022-03-27T09:53:22Z"],
  "stock_type": ["LARGECAP", "MIDCAP"],
}
```

Sample Output:
```json
[{
  "name": "Reliance Industries Limited",
  "ticker": "RELIANCE",
  "transaction_type": "BUY",
  "price": "2350.55",
  "quantity": "55",
  "stock_type": "LARGECAP",
  "sector": "chemicals",
  "trade_time": "2022-02-27T09:53:22Z"
}]
```

### Problem-3
---
Write a function that can search transactions using a free text which is a combination of one or more of the below attributes, if no transaction is found return empty array. Take into account partial string matches.
* name
* ticker
* sector
* transaction_type

Sample Input 1:
```bash
REL
```
Sample Output 1:
```json
[{
  "name": "Reliance Industries Limited",
  "ticker": "RELIANCE",
  "transaction_type": "BUY",
  "price": "2350.55",
  "quantity": "55",
  "stock_type": "LARGECAP",
  "sector": "chemicals",
  "trade_time": "2022-02-27T09:53:22Z"
}]
```

Sample Input 2:
```bash
Chemicals BUY
```
Sample Output 2:
```json
[{
  "name": "Reliance Industries Limited",
  "ticker": "RELIANCE",
  "transaction_type": "BUY",
  "price": "2350.55",
  "quantity": "55",
  "stock_type": "LARGECAP",
  "sector": "chemicals",
  "trade_time": "2022-02-27T09:53:22Z"
}, {
  "name": "Pidilite Industries",
  "ticker": "PDLITE",
  "transaction_type": "BUY",
  "price": "1250",
  "quantity": "500",
  "stock_type": "MIDCAP",
  "sector": "chemicals",
  "trade_time": "2022-05-07T09:53:22Z"
}]
```