const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });
createTransaction({ type: 'credit', value: 1800 });

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'credit') {
        user.balance += transaction.value;
    } else {
        user.balance -= transaction.value;
    }
}



function getHigherTransactionByType(typetransaction) {
    let HigherT = user.transactions[0].value

    for (let transaction of user.transactions) {
        if (transaction.type == typetransaction) {
            if (transaction.value > HigherT) {
                HigherT = transaction.value;
            }
        }
    }
    valueHigher = {
        type: typetransaction,
        value: HigherT
    }
    console.log(valueHigher)

}

function getAverageTransactionValue() {
    let sum = 0
    let average = 0

    for (let transaction of user.transactions) {
        sum += transaction.value

    }

    average = sum / user.transactions.length

    console.log(average)
}

function getTransactionsCount() {
    let countT = {
        debit: 0,
        credit: 0
    }
    
    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            countT.credit += 1
        } else {
            countT.debit += 1
        }

    }
    console.log(countT)
}

console.log(user.balance); // 60

getHigherTransactionByType('credit');
getHigherTransactionByType('debit');

getAverageTransactionValue();

getTransactionsCount(); 