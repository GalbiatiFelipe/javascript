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
 cria uma função 'numero' com parametro qualquer, se esse parametro que vai receber um numero for maior ou igual a 1 & esse parametro for menor ou igual a 100, o retorno será true, se não sera false.
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
    num.value = '' // ele está depois do código portanto após a função ser executada o num.value será vazio
    num.focus() // ele está depois do código portanto após a função ser executada o mouse vai 'clicar' na caixa automaticamente
    
    
}

/*
função adicionar() vinculada a uma ação onclick no html, nesse caso ela verifica que se o 'return' das funções 'numero' e 'nalista' foram verdadeiros (true).
*/

function finalizador() {
    if (valores.length == 0) {
        window.alert('Adicione números antes de finalizar')
    } else {
        let quant = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

            /*
            for (let pos = 1; valores[pos] > maior; pos++) {
                maior = valores[pos]
            }
            let pos = 1
            while (valores[pos] < menor) {
                menor = valores[pos]
                pos--
            }
            */
        
        for (let pos in valores) { // cria uma variavel que indica o índice de cada número da variavel 'valores'.
            soma += valores[pos] // 'soma' é igual a zero, por estar dentro do for serão somados todos os números de 'valores'.
            if (valores[pos] > maior) { 
                maior = valores[pos] // se a posição for maior que o índice 0 (indicado pela variavel 'let maior') let maior recebe o número localizado no índice 0.
            }
            if (valores[pos] < menor) {
                menor = valores[pos] // se a posição for menor que o índice 0, let menor recebe o número localizado no índice 0.
            } 
        }
        media = soma / quant // sabendo a soma fica simples fazer a operção de média.
    /*
    No comentario acima temos a versão básica do código acima.
    */

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todos temos ${quant} números adicionados:</p>`
        res.innerHTML += `<p>*O maior número encontrado foi o ${maior}.</p>`
        res.innerHTML += `<p>*O menor número encontrado foi o ${menor}.</p>`
        res.innerHTML += `<p>*A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>*A média de todos os valores é ${media}.</p>`
    }
}