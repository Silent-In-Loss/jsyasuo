const qu1 = prompt('Укажите ссылку на первую картинку.')
const qu5 = prompt('Укажите ссылку на вторую картинку.')

const qu2 = prompt('Введите имя.')
const qu3 = prompt ('Введите фамилию.')
const qu4 = prompt('Введите возраст.')

const box = document.createElement('div')
const photo = document.createElement('img')
const photo2 = document.createElement('img')
const name = document.createElement('h1')
const surname = document.createElement('h2')
const age = document.createElement('h3')
const box1 = document.createElement ('div')
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')

const body = document.querySelector('body')



photo.src = qu1
photo2.src = qu5

name.innerText = qu2
surname.innerText = qu3
age.innerText = qu4
btn1.innerText = 'Yes'
btn2.innerText = 'No'



// body.append(name)
box.append(photo)
box.append(photo2)
box.append(name)
box.append(surname)
box.append(age)
box.append(box1)
box1.append(btn1)
box1.append(btn2)


box.classList = 'box'
photo.style.width = '300px'
photo2.style.width = '300px'
photo2.style.margin = '10px'
photo.style.margin = '10px'
box.style.border = '1px solid black'
box.style.width = '640px'
box.style.margin = '0 auto'
box1.style.display = 'flex';
box1.style.gap = '30px';
box1.style.justifyContent = 'center'
box1.style.marginBottom = '25px'



body.append(box)