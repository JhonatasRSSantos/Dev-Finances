const Modal = {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Energia',
        amount: -50000,
        date:'23/01/2021',
    },
    {
        id: 2,
        description: 'Criação Website',
        amount: 500000,
        date:'23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date:'23/01/2021',
    },
    {
        id: 4,
        description: 'App vendido',
        amount: -200000,
        date:'28/01/2021',
    },
]

const Transaction = {
    incomes(){

    },
    expenses(){ 
        
    },

total(){

}
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody')
    addTransaction(Transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSClass = transaction.amount > 0 ? "income" : "expense"

        const amount = utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">$(transaction.description)</td>
        <td class="${CSSClass}">$(transaction.amount)</td>
        <td class="date">$(transaction.date)</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
    `
    return html;
    }
}
const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
    }
}

// DOM.addTransaction(transactions[1]);
// DOM.addTransaction(transactions[2]);
// DOM.addTransaction(transactions[3]);

transaction.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})