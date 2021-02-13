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

const Transaction = {
    all: [
        {
            description: 'Energia',
            amount: -50000,
            date:'23/01/2021',
        },
    
        {
            description: 'Criação Website',
            amount: 500000,
            date:'23/01/2021',
        },
    
        {
            description: 'Internet',
            amount: -20000,
            date:'23/01/2021',
        },
    
        {
            description: 'App vendido',
            amount: -200000,
            date:'28/01/2021',
        },
    ]
    

    add(transaction) {
        Transaction.all.push(transaction)

        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1)

        App.reload()
    },

    incomes() {
        let income = 0;
        // pegar todas as transacoes, para cada transacao,
        transactions.all.forEach((transaction => {
            // se for maior que zero
            if (transaction.amount > 0 ) {
                // somar a uma variavel e retornar a variavel
                income += transaction.amount;
            }
        })
        return income;
    },

    expenses() { 
        let expense = 0;
        // pegar todas as transacoes, para cada transacao
        transactions.all.forEach((transaction => {
            // se ela for menor que zero
            if (transaction.amount < 0 ) {
                // somar a uma variavel e retornar a variavel
                expense += transaction.amount;
            }
        })
        return expense;
    },

    total() {
        return Transaction.incomes() + Transaction.expenses();
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(Transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },

    (method) innerHTMLTransaction(transaction: any): string
    
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

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
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
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

const Form = {
    description: document.querySelector('inputdescription'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues() { 
        return{
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    validadeFields() {
        const { description, amount, date } = Form.getValues()
        
        if(
            description.trim() === "" ||
            amount.trim() === "" ||
            date.trim() === "" ) {
                throw new Error("Por favor, preencha todos os campos")
        }
    },

    submit(event) {
        event.preventDefault();

        //vewrificar se todas as informacoes foram preenchidas, 
        Form.validadeFields();
        //formatar os dados para ser salvo
        // Form.formatData();
        //salvar 
        // apagar dados do formulario
        // modal deve fechar
        // atualizar formulario
    }
}

const App = {
    init() {

        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })

        DOM.updateBalance();
    },

    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()




// transaction.add({
//     description: "hello",
//     amount: 200,
//     date: '23/01/2021'
// })