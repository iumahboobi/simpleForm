const users = []


// Create container div
const container = document.createElement('div')
container.className = 'container'
document.body.appendChild(container)


// create and append header
const heading = document.createElement('h1')
heading.textContent = 'Welcome to my Simple Web App'
container.appendChild(heading)

// create and append form

const form = document.createElement('form')
form.id = 'myForm'
container.appendChild(form)

// create and append label and input for name

const namelabel = document.createElement('label')
namelabel.setAttribute('for', 'name')
namelabel.textContent = 'Enter Your name:'
form.appendChild(namelabel)

const nameInput = document.createElement('input')
nameInput.setAttribute('type', 'text')
nameInput.setAttribute('id', 'name')
nameInput.setAttribute('name', 'name')
nameInput.setAttribute('required', true)
form.appendChild(nameInput)

// create and append label and input for surname

const surNamelabel = document.createElement('label')
surNamelabel.setAttribute('for', 'surname')
surNamelabel.textContent = 'Enter Your Sir Name:'
form.appendChild(surNamelabel)

const surNameInput = document.createElement('input')
surNameInput.setAttribute('type', 'text')
surNameInput.setAttribute('id', 'surname')
surNameInput.setAttribute('name', 'surnname')
surNameInput.setAttribute('required', true)
form.appendChild(surNameInput)


// create and append label and input for profession

const professionlabel = document.createElement('label')
professionlabel.setAttribute('for', 'profession')
professionlabel.textContent = 'Enter Your Profession:'
form.appendChild(professionlabel)

const professionInput = document.createElement('input')
professionInput.setAttribute('type', 'text')
professionInput.setAttribute('id', 'profession')
professionInput.setAttribute('name', 'profession')
professionInput.setAttribute('required', true)
form.appendChild(professionInput)


// create and append label and input for age

const agelabel = document.createElement('label')
agelabel.setAttribute('for', 'age')
agelabel.textContent = 'Enter Your age:'
form.appendChild(agelabel)

const ageInput = document.createElement('input')
ageInput.setAttribute('type', 'number')
ageInput.setAttribute('id', 'age')
ageInput.setAttribute('name', 'age')
ageInput.setAttribute('required', true)
form.appendChild(ageInput)



// create and append button

const button = document.createElement('button')
button.setAttribute('type', 'submit')
button.textContent = ('Submit')
form.appendChild(button)

// create and append paragraph

const paragraph = document.createElement('p')
paragraph.id = 'greeting'
container.appendChild(paragraph)


// create and append div for user List

const userList = document.createElement('div')
userList.className = 'user-list'
container.appendChild(userList)

// create and append unordered kust ti zser list div

const userListUl = document.createElement('ul')
userList.appendChild(userListUl)



//functions
// add Event Listener to form
form.addEventListener('submit', function (event) {

    event.preventDefault()
    const name = document.getElementById('name').value
    const surName = document.getElementById('surname').value
    const profession = document.getElementById('profession').value
    const age = document.getElementById('age').value

    users.push({ name, surName, age, profession })
    form.reset()
    console.log('users', users)

    updateList()

})


function updateList() {

    userListUl.innerHTML = ''

    users.forEach(user => {

        const listItem = document.createElement('li')
        listItem.textContent = `Name: ${user.name} Sir Name: ${user.surName} Age: ${user.age} Profession: ${user.profession} `
        userListUl.appendChild(listItem)

    })



}

