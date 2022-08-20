function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function createLine(dataCart) {
    console.log(dataCart)
    line = document.createElement("tr");
    tdid = document.createElement("td")
    tdName = document.createElement("td");
    tdId.innerHTML = items.id
    tdName.innerHTML = items.name

    line.appendChild(tdId);
    line.appendChild(tdName);

    return line;

}

function main() {
    data = fazGet("https://raw.githubusercontent.com/dalvaro0218/cart-20082022-codeby/1cd49039fc6cac39ae4cc7d0e7828482965050f8/abaixo-10-reais.json");
    let dataCart = JSON.parse(data);
    let table = document.getElementById("table")
    dataCart.forEach(element => {
        let line = createLine(element);
        tabela.appendChild(line);
    });
}

main ()