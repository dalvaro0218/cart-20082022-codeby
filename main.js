function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open{"GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {

}

function main() {
    data = fazGet("")
    usuarios = JSON.parse(data);
    console.log(usuarios)
}
}