function search(event) {
    event.preventDefault()
    let ser=document.getElementById('searchBlog').value;
    ser=ser.toLocaleLowerCase();
    ser=ser+'.html';
    console.log(ser);

        window.location.href=ser;
    
   
}