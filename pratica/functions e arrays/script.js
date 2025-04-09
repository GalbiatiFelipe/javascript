let num = document.getElementById('idnum')
let lista = document.getElementById('idselec')
let res = document.querySelector('div#res')
let valores = []

function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

/*
 cria uma função 'numero' com parametro qualquer, se esse parametro que vai receber um numero for maior ou igual a um & esse parametro for menor ou igual a 100, o retorno será true, se não sera false.
*/

function nalista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

/*
cria uma função para verificar se o número ja foi adicionado. Recebendo um parametro representando os numeros na lista (l) e um para o numero digitado no input (n)
l.indexof(number(n)) significa que o numero digitado vai ser procurado na lista. != -1 significa "se o valor digitado for diferente de -1", ou seja não está na lista, então retorna true.
*/
function adicionar() {
    if (numero(num.value) && !nalista(num.value, valores)) {
       valores.push(Number(num.value)) //adiciona dentro da let 'valores' o número digitado no input 'num'.
       let item = document.createElement('option') // uma variavel que cria a tag 'option' no HTML.
       item.text = `O valor ${num.value} foi adicionado` //adiciona um texto a essa tag.
       lista.appendChild(item) //faz o texto aparecer no local que a let 'lista' está se referindo, nesse caso a tag 'select'.
    } else {
        alert('Número inválido ou ja adicionado.')
    }
    num.value = ''
    num.focus()
    
    
}

/*
função adicionar() vinculada a uma ação onclick no html, nesse caso ela verifica que se o 'return' das funções 'numero' e 'nalista' foram verdadeiros (true).
*/