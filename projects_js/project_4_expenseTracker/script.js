document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseListDisplay = document.getElementById('expense-list');
    const totalAmountDisplay = document.getElementById('total-amount');

    let expenses = JSON.parse(localStorage.getItem('expense-data')) || [];
    let totalAmount = calculateTotal();

    renderExpenses();


    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if (name != "" && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name,
                amount
            }

            expenses.push(newExpense);
            saveExpenseToLocal();
            renderExpenses();
            updateTotal();

            // clear input
            expenseNameInput.value = ""
            expenseAmountInput.value = ""

        }
    })

    function renderExpenses() {
        expenseListDisplay.innerText = ""
        expenses.forEach(e => {
            const expenseDiv = document.createElement('li');
            expenseDiv.innerHTML = `
            ${e.name} - ${e.amount}
            <button data-id="${e.id}">Delete</button>
            `;
            expenseListDisplay.appendChild(expenseDiv);
            updateTotal();
        });
    }


    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }
    function updateTotal() {
        totalAmount = calculateTotal();
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    function saveExpenseToLocal() {
        localStorage.setItem('expense-data', JSON.stringify(expenses));
    }


    expenseListDisplay.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            // console.log("button clicked");
            const expenseId = parseInt(e.target.getAttribute('data-id'));
            expenses = expenses.filter(expense => expense.id !== expenseId);
            saveExpenseToLocal();
            renderExpenses();
            updateTotal();
        }
    })

})