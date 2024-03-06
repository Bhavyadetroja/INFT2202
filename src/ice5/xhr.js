document.getElementById("getXhr").addEventListener
    ('click', e => {
        getAjax("./products.json");
    });

function getXhr(resource_url) {
    let request = new XMLHttpRequest();

    console.log(request);
    request.onreadystatechange = function (event) {
        if (this.readyState === 4) {
            if (this.status === 200) {
                handleSuccess(this);
            } else {
                handleError(this);
            }
        }   
       
    }
    request.open('GET', resource_url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();
    
}
function handleSuccess(res) {




    const data = res.response;
    const tableContainer = document.getElementById('xhr-table');

    // Create table element
    const table = document.createElement('table');
    table.classList.add('table');

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headerName = document.createElement('th');
   
    const headerPrice = document.createElement('th');
  
    headerRow.appendChild(headerName);
    headerRow.appendChild(headerPrice);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    for (const product of data) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        const priceCell = document.createElement('td');
        priceCell.textContent = product.price;
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    // Append table to container
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}

function handleError(response){
    console.log(res);
   
}
function getAjax(resource_url){
    const opts = {
        url:resource_url,
        header: {
            "Content-Type": "application/json"
        }
        
    }
    $.ajax(opts)
          .done(handleSuccess)
          .fail(handleError)

}   
