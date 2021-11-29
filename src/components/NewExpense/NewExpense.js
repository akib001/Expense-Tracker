import react from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props) {
    const onExpenseFormHandler = (expenseFormEvent) => {
        const expenseData = {
            ...expenseFormEvent,
            id: Math.random().toString()
        };

        console.log(expenseData);
        props.onNewExpense(expenseData);

    }

    return <div className='new-expense'>
        <ExpenseForm onExpenseForm={onExpenseFormHandler} />
    </div>
}

export default NewExpense;