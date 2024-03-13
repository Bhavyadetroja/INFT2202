document.getElementById("getXhr").addEventListener
    ('click', e => {
        getFetch("./products.json");
    });

    function getXhr(resource_url) {
        let request = new XMLHttpRequest();
    
        request.onreadystatechange = function (event) {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    handleSuccess(this);
                } else {
                    handleError(this);
                }
            }   
        };
    
        request.open('GET', resource_url);
        request.send(); 
    }



function getAjax(resource_url){
    const opts = {
        url: resource_url,
        header: {
            "Content-Type": "application/json"
        }
        
    }
    $.ajax(opts)
          .done(handleSuccess)
          .fail(handleError)

}  

async function getFetch(resource_url){
    try {
        const headers = new Headers({
            "Content-Type": "application/json" 
        });

        const request = new Request(resource_url,{
          method: "GET",
          headers: headers
        });
        const result  =await fetch(request)
        console.log(result);
        if(result.ok){
            handleSuccess(await result.json());

        }else {
            handleError(await result.json());
        }

    }catch(ex){
        console.log(ex)
    }

}

function handleSuccess(res) {




    const data = res
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
  
   
}