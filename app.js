/* VIEW */
let allViews = document.querySelectorAll(".view");
let accountsView = document.querySelector(".accountView");
let addAccountView = document.querySelector(".addAccountView");
let editDeleteView = document.querySelector(".editDeleteView");
let editAccountView = document.querySelector(".editAccountView");

/* TABLE */
let accountsTable = accountsView.querySelector("tbody");
let editDeleteTable = editDeleteView.querySelector("tbody")

/* INPUTS */ 
let inputId = addAccountView.querySelector("input[name='id']");
let inputFullName = addAccountView.querySelector("input[name='fullName']");
let inputDeposit = addAccountView.querySelector("input[name='deposit']");
let inputCard = addAccountView.querySelector("input[name='card']");

let editInputId = editAccountView.querySelector("input[name='id']");
let editInputFullName = editAccountView.querySelector("input[name='fullName']");
let editInputDeposit = editAccountView.querySelector("input[name='deposit']");
let editInputCard = editAccountView.querySelector("input[name='card']");

/* BUTTONS */           
let accountsBtn = document.querySelector('#accounts');
let addAccountBtn = document.querySelector('#addAccount');
let editDeleteAccountBtn = document.querySelector('#editDeleteAccount');
let saveAccountBtn = document.querySelector('#saveAccount');
let updateAccountBtn = document.querySelector('#updateAccount');

/* LISTENERS */
accountsBtn.addEventListener('click', displayAccountView);
addAccountBtn.addEventListener('click', displayAddAccountView);
editDeleteAccountBtn.addEventListener('click', displayEditDeleteAccountView);
saveAccountBtn.addEventListener('click', saveAccount);
updateAccountBtn.addEventListener('click', updateAccount);


displayAccountView();

/* CHANGE ACCOUNT VIEW */
function changeView(view){
    allViews.forEach((currentView)=>{
        currentView.style.display = "none";
    })
    view.style.display = "block";
}

function displayAccountView(){
    // addAccountView.style.display = "none";
    // accountsView.style.display = "block";
    // editDeleteView.style.display = "none";    
    createAccountTable();
    changeView(accountsView);
}

function displayAddAccountView(){
    // accountsView.style.display = "none";
    // addAccountView.style.display = "block";
    // editDeleteView.style.display = "none";
    changeView(addAccountView);
}

function displayEditDeleteAccountView(){
    // editDeleteView.style.display = "block";
    // addAccountView.style.display = "none";
    // accountsView.style.display = "none";
    changeView(editDeleteView);
    createEditDeleteTable()   
}



function saveAccount(){

    let account = {
        id : new Date().getTime(),
        fullName : inputFullName.value,
        deposit : inputDeposit.value,
        card : inputCard.value
    }
    db.push(account)

    displayAccountView();
    inputId.value = "";
    inputFullName.value = "";
    inputDeposit.value = "";
    inputCard.value = "";

}

function createAccountTable(){
    let html = ""
    db.forEach((account) => {
        html += `
            <tr>
                <td>${account.id}</td>
                <td>${account.fullName}</td>
                <td>${account.deposit}</td>
                <td>${account.card}</td>
            </tr>
        `.trim()
    });
accountsTable.innerHTML = html;
}

function createEditDeleteTable(){
    let html = ""
    db.forEach((account) => {
        html += `
            <tr>
                <td>${account.id}</td>
                <td>${account.fullName}</td>
                <td>${account.deposit}</td>
                <td>${account.card}</td>
                <td>
                    <button class="btn btn-sm btn-warning">Edit</button>
                    <button class="btn btn-sm btn-danger delete " data-id="${account.id}">Delete</button>
                </td>
            </tr>
        `.trim()
    });
    editDeleteTable.innerHTML = html;
    addActionsListeneres();
}

function addActionsListeneres(){
    let deleteBtn = editDeleteTable.querySelectorAll(".delete");
    deleteBtn.forEach((btn)=>{
        btn.addEventListener('click', deleteAccount);
    })
}

function deleteAccount(){
    let id = this.getAttribute("data-id");
    console.log(id);
    db = db.filter((account) => account.id !== id);
    createAccountTable();
    changeView(accountsView);
}

function updateAccount(){

}