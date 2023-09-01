let accountsView = document.querySelector(".accountView");
let accountsTable = accountsView.querySelector("tbody");

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