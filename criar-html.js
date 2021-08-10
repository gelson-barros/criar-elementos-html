/*
- Implemente uma função que cria e retorna um elemento HTML;
- Ela deve receber o nome do elemento HTML a ser criado e um objecto com os atributos que o elemento deve conter;
- A quantidade da atributos que o elemento irá conter pode variar.
Dica: pesquise por Object.entries.
*/

const createElement = (elementName, attributes) => {
    const element = document.createElement(elementName);
    const attributesAsArray = Object.entries(attributes);

    attributesAsArray.forEach(([key, value])=> element.setAttribute(key, value));

    return element;
}

const input = createElement('input', {
    type: 'radio',
    id: 'input1',
    name: 'main',
    value: 'principal',
    for: 'input1',
    'data-js': 'input1'
})

console.log(input)