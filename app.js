/* VIEW */
let accountsView = document.querySelector(".accountView");
let addAccountView = document.querySelector(".addAccountView");

/* TABLE */
let accountsTable = accountsView.querySelector("tbody");

/* INPUTS */ 

let inputId = addAccountView.querySelector("input[name='id']");
let fullNameId = addAccountView.querySelector("input[name='fullName']");
let depositId = addAccountView.querySelector("input[name='deposit']");
let cardId = addAccountView.querySelector("input[name='card']");

/* BUTTONS */
let accountsBtn = document.querySelector('#accounts');
let addAccountBtn = document.querySelector('#addAccount');
let editDeleteAccountBtn = document.querySelector('#editDeleteAccount');
let saveAccountBtn = document.querySelector('#saveAccount');

/* LISTENERS */
accountsBtn.addEventListener('click', displayAccountView)
addAccountBtn.addEventListener('click', displayAddAccountView)
editDeleteAccountBtn.addEventListener('click', displayEditDeleteAccountView)
saveAccountBtn.addEventListener('click', saveAccount)

createAccountTable();

function displayAccountView(){
    addAccountView.style.display = "none";
    accountsView.style.display = "block";    
}

function displayAddAccountView(){
    accountsView.style.display = "none";
    addAccountView.style.display = "block";
}

function saveAccount(){

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