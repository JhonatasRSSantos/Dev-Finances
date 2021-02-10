const Modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active');
    },

    close() {                                                                                                                                                                                                                               
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active');
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
    incomes() {
        let income = 0;
        // pegar todas as transacoes, para cada transacao,
        transactions.forEach((transaction) => {
            // se for maior que zero
            if (transaction.amount > 0 ) {
                // somar a uma variavel e retornar a variavel
                income += transaction.amount;
            }
        });
        return income;
    },
    expenses() { 
        let expense = 0;
        // pegar todas as transacoes, para cada transacao
        transactions.forEach((transaction) => {
            // se ela for menor que zero
            if (transaction.amount < 0 ) {
                // somar a uma variavel e retornar a variavel
                expense += transaction.amount;
            }
        });
        return expense;
    },
    total() {
        return Transaction.incomes() + Transaction.expenses();
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(Transaction, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        DOM.transactionsContainer.appendChild(tr);
    },
    
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense";

        const amount = Utils.formatCurrency(transaction.amount);

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
        `

        return html;

    },

    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes());
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expenses());
        document
            .getElementById('totalDisplay')
            .innerHTML = utils.formatCurrency(Transaction.total());
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g,"");

        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR,"  {
            style: "currency",
            currency: "BRL"
        });
        return signal + value;
    }
}

transaction.forEach(function(transaction) {
        DOM.addTransaction(transaction);

});

DOM.updateBalance();