// let totalAmount = document.getElementById("total-amount")
// let userAmount = document.getElementById("user-amount")

// const checkAmountButton = document.getElementById("check-amount")
// const totalAmountButton = document.getElementById("total-amount-button")
// const productTitle = document.getElementById("product-title")
// const errorMessage = document.getElementById("budget-error")
// const productTitleError = document.getElementById("product-title-error")
// const productCostError = document.getElementById("product-cost-error")
// const amount = document.getElementById("amount")
// const expenditureValue = document.getElementById("expenditure-value")
// const balanceValue = document.getElementById("balance-amount")
// const list = document.getElementById("list")
// let tempAmount = 0



// /////////// Set Salary part //////////////

// totalAmountButton.addEventListener("click", ()=>{
//     tempAmount = totalAmount.value
//     if(tempAmount === "" || tempAmount < 0){
//         errorMessage.classList.remove("hide")
//     }
//     else{
//         errorMessage.classList.add("hide")
//         //Set salary 
//         amount.innerHTML = tempAmount
//         //Set Balance
//         balanceValue.innerHTML = tempAmount - expenditureValue.innerText
//         // Clear Input Box 
//         totalAmount.value = ""
//     }
// })

// ////Function To Disable Edit and Delete Button
// const disableButton = (bool) => {
//     let editButtons = document.getElementsByClassName("edit")
//     Array.from(editButtons).forEach(element =>{
//         element.disabled = bool
//     })
// }


// ////Function To Moodify List Element

// const modifyElement = (element, edit = false)=>{
//     let parentDiv = element.parentELement
//     let currentBalance = balanceValue.innerText
//     let currentExpense = expenditureValue.innerText
//     let parentAmount = parentDiv.querySelector(".amount").innerText
//     if (edit){
//         let parentText = parentDiv.querySelector(".product").innerText
//         productTitle.value = parseInt(currentBalance) + parseInt(parentAmount)
//         expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount)
//         parentDiv.remove()
//     }
// }

// ///Function To Create List
// const listCreator = (expenseName , expenseValue)=>{
//     let sublistContent = document.createElement("div")
//     sublistContent.classList.add("sublist-content","flex-space")
//     list.appendChild(sublistContent)
//     sublistContent.innerHTML =`<p class="product">${expenseName}</p><P class="amount">${expenseValue}</p>`
//     let editButton = document.createElement("button");
//     editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
//     editButton.style.fontSize = "24px";
//     editButton.addEventListener("click", () => {
//     modifyElement(editButton, true);
//     })

//     let deleteButton = document.createElement("button")
//     deleteButton.classList.add("fa-solid","fa-trash-can","delete")
//     deleteButton.style.fontSize = "24px"
//     deleteButton.addEventListener("click", ()=>{
//         modifyElement(deleteButton)
//     })
//     sublistContent.appendChild(editButton)
//     sublistContent.appendChild(deleteButton)
//     document.getElementsByTagName("list").appendChild(sublistContent)
// }

// //Function TO Add  Expenses 
// checkAmountButton.addEventListener("click", ()=>{
//     //empty check 
//     if (!userAmount.value || !productTitle.value){
//             productTitleError.classList.remove("hide")
//             return false
//     }
//     //Enable buttons 
//     disableButton(false)
//     //Expense
//     let expenditure = parseInt(userAmount.value)
//     let sum = parseInt(expenditureValue.innerText) + expenditure
//     expenditureValue.innerText = sum
//     //Total balance
//     const totalBalance = tempAmount - sum
//     balanceValue.innerText = totalBalance
//     //create list
//     listCreator(productTitle.value,userAmount.value)
//     //empty inputs
//     productTitle.value = ""
//     userAmount.value = ""

// })
let totalAmount = document.getElementById("total-amount");
// let userAmount = document.getElementById("cost");

const checkAmountButton = document.getElementById("checkamount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("title");
const productCost = document.getElementById("cost")
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;

// Set Salary part
totalAmountButton.addEventListener("click", () => {
    tempAmount = totalAmount.value;
    if (tempAmount === "" || tempAmount < 0) {
        errorMessage.classList.remove("hide");
    } else {
        errorMessage.classList.add("hide");
        // Set salary
        amount.innerHTML = tempAmount;
        // Set Balance
        balanceValue.innerHTML = tempAmount - expenditureValue.innerText;
        // Clear Input Box 
        totalAmount.value = "";
    }
});

// Function To Disable Edit and Delete Button
const disableButton = (bool) => {
    let editButton = document.getElementsByClassName("edit"); 
    Array.from(editButton).forEach(element => {
        element.disabled = bool;
    });
}

// Function To Modify List Element
const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement;
    let currentBalance = balanceValue.innerText;
    let currentExpense = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;
    if (edit) {
        let parentText = parentDiv.querySelector(".product").innerText;
        productTitle.value = parentText
        productCost.value =  parseInt(parentAmount);
        balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount)
        expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount);
        parentDiv.remove();
    }
    else{
            parentDiv.remove()
            balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount)
            expenditureValue.innerText = parseInt(currentExpense)- parseInt(parentAmount)
    }
    }



// Function To Create List
const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content", "flex-space");
    list.appendChild(sublistContent);
    sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
    editButton.style.fontSize = "24px";
    editButton.addEventListener("click", () => {
        modifyElement(editButton, true);
    });

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "24px";
    deleteButton.addEventListener("click", () => {
        modifyElement(deleteButton);
    });
    sublistContent.appendChild(editButton);
    sublistContent.appendChild(deleteButton);
    list.appendChild(sublistContent);
}

// Function TO Add Expenses 
checkAmountButton.addEventListener("click", () => {
    // Empty check 
    if (!productCost.value || !productTitle.value) {
        productTitleError.classList.remove("hide");
        return false;
    }
    // Enable buttons 
    disableButton(false);
    // Expense
    let expenditure = parseInt(productCost.value);
    let sum = parseInt(expenditureValue.innerText) + expenditure;
    expenditureValue.innerText = sum;
    // Total balance
    const totalBalance = tempAmount - sum;
    balanceValue.innerText = totalBalance;
    // Create list
    listCreator(productTitle.value, productCost.value);
    // Empty inputs
    productTitle.value = "";
    productCost.value = "";
});



let expensedata 
if(localStorage.product != null){
    expensedata = JSON.parse(localStorage.product)
}else{
    expensedata = []
}

checkamount.addEventListener('click', function(){
    let expense ={
        title: title.value,
        cost: cost.value,
    }
    expensedata.push(expense)
    localStorage.setItem('product', JSON.stringify(expensedata))
    console.log(expensedata);
})

function showData(){
    let list = ''
    for(let i = 0; i<expensedata.length;i++){
    list = `<p class="product">${expensedata[i].title}</p><p class="amount">${expensedata[i].cost}}</p>`
}
document.getElementById('list').innerHTML= list
}

//listCreator(productTitle.value,productCost.value)
