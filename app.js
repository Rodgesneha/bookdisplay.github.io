const nameOfBook = document.getElementById('name'),
      auther = document.getElementById('auther'),
      isbn = document.getElementById('isbn'),
      table = document.getElementById('table'),
      container = document.querySelector('.container'),
      heading = document.getElementById('heading');

class Book{
    constructor(name,auther,isbn){
        this.name = name;
        this.auther = auther;
        this.isbn = isbn;
    }
}
class UI{
    displayMessage(msg,className){
        let div = document.createElement('div');
        div.className=className;
        div.textContent = msg;
        container.insertBefore(div,heading);
        setTimeout(function(){
            div.remove();
        },2000)
    }
    addBook(book){
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.auther}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='delete'>X</a></td>
        `;
        table.appendChild(row);
    }
    deleteBook(target){
        if (target.className==='delete') {
            target.parentElement.parentElement.remove();
        }
    }
    clearInput(){
        nameOfBook.value='';
        auther.value='';
        isbn.value='';
    }
}
document.getElementById('inputForm').addEventListener('submit',function(e){
    const ui = new UI;
    if(nameOfBook.value==='' || auther.value==='' || isbn.value===''){

        ui.displayMessage('fill the details','error');
    }
    else{
        const book = new Book(nameOfBook.value,auther.value,isbn.value);

        ui.addBook(book);
        ui.displayMessage('book added','success');
        ui.clearInput();
    }
    e.preventDefault();
})

document.querySelector('table').addEventListener('click',function(e){

    const ui = new UI;
    ui.deleteBook(e.target);
    ui.displayMessage('book removed','success');
    e.preventDefault();
})