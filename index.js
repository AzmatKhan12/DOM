var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit Event
form.addEventListener('submit', addItem);

// addItem
function addItem(e) {
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create delet button
    var deletebtn = document.createElement('button');

    // add class del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deletebtn.appendChild(document.createTextNode('x'));

    //Append button to li
    li.appendChild(deletebtn);

    //Append li to list
    itemList.appendChild(li);


}
// Remove item
function remove(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
