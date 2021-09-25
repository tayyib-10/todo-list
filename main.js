const todoTitle = document.getElementById('todoText')
const descInfo = document.getElementById('descText')
const todoList = document.getElementById('todos')
const btn = document.getElementById('btn')

const createTodo = (todo, desc) => {
  const todoElement = document.createElement('div')
  todoElement.classList.add('todoElement')
  const todoText = document.createTextNode(todo)
  const descText = document.createTextNode(desc)
  const title = document.createElement('h2')
  title.classList.add('todoTitle')
  const descHeader = document.createElement('p')
  descHeader.classList.add('descTitle')
  
  title.append(todoText)
  descHeader.append(descText)
  
  todoElement.appendChild(title)
  todoElement.appendChild(descHeader)
  
  todoList.appendChild(todoElement)
  
  todoElement.addEventListener('dblclick', () => {
    todoElement.classList.add('remove')
    title.classList.add('remove')
    descHeader.classList.add('remove')
    //todoElement.classList.remove('todoElement')
  })
  
}

btn.addEventListener('click', () => {
  if (todoTitle.value !=='' && descInfo.value !== '') {
    createTodo(todoTitle.value, descInfo.value)
    
  }
  
  todoTitle.value = ''
  descInfo.value = ''
  
})