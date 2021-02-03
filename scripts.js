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
        id:1,
        description: 'Luz',
        amount: -5000,
        date:'23/01/2021',
    },
    {
        id:2,
        description: 'Website',
        amount: 500000,
        date:'23/01/2021',
    },
    {
        id:3,
        description: 'Internet',
        amount: -2000,
        date:'23/01/2021',
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