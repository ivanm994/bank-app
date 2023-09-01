/* VIEW */
let accountsView = document.querySelector(".accountView");
/* TABLE */
let accountsTable = accountsView.querySelector("tbody");
/* BUTTONS */
let accountsBtn = document.querySelector('#accounts');
let addAccountBtn = document.querySelector('#addAccount');
let editDeleteAccountBtn = document.querySelector('#editDeleteAccount');


createAccountTable();

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