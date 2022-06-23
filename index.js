lists = JSON.parse( localStorage.getItem('todoForm')) ?
JSON.parse( localStorage.getItem('todoFom')) : [
    {
        name: "DVD"
    }
];
localStorage.setItem('todoForm', JSON.stringify(lists) );


function todoList() {
    let item = document.getElementById('todoInput').value //pulling value from input box
    let text = document.createTextNode(item) //turning input text into node
    let newItem = document.createElement('li') //creates a list
    newItem.appendChild(text) //appends task entered from input
    document.getElementById('todoList').appendChild(newItem) //appends the entered task to the list
  }

  // function that reset the items
  function reset(){
    del = ''
    document.getElementsByTagName('input').innerHTML = del

}
let del= "";

//sort by alphabetic order
document.getElementById("ul").innerHTML = text;
text.sort();

function addRecord() {
  // e.preventDefault();
  ul.push(
      {
          name: document.getElementById('name').value,
   
      }
  );
 
}


const messages = ["Hello there", "Honey, Im home", "Dad went to get milk"];


function showItems(messages) {
  document.querySelector("#todoList").innerHTML = "";
  messages.forEach((message) => {
    document.querySelector("#todoList").innerHTML += `
      <li>${message}</li>
    `;
  });
}