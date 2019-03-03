// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)

var ul = document.getElementById('list');// Get all list in array format
var li;

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);


function removeItem(){
    li = ul.children
    console.log(li)
    for (let index = 0; index < li.length; index++) {
     while (li[index] && li[index].children[0].checked) {
        ul.removeChild(li[index])         
     }
        
    }
}



function addItem(){
    var input = document.getElementById('input');
    var item = input.value;// Get a value what we want add in TodO
    var textnode = document.createTextNode(item)// We save in variable what we get

    if (item === '') {
       alert('Please Enter a Valid Todo')

        //Add a p tag and assign a value of "Enter your Todo"
    }else{
        // create li 
        li = document.createElement('li');
        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')

        // create label
        var label = document.createElement('label');
        label.setAttribute('for','item')// Optional

        //add these elements to web

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0]);
        //parent.insertBefore(newNode,referenceNode)
        setTimeout(()=>{
            li.className = 'visual';
        },500)
        input.value = '';
        
    }
}

