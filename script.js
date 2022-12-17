
const button = document.getElementById('reveser')
const button2 = document.getElementById('reveser2')

button.addEventListener('click', ()=> {
    let input = document.getElementById('input_ht').value
    let temp = input.split('-').reverse().join(" - ")
    console.log(temp)
    document.getElementById('text_ht').innerHTML = temp
})

button2.addEventListener('click',()=> {
    document.getElementById('input_ht').innerHTML = ''
    document.getElementById('text_ht').innerHTML = ''
})