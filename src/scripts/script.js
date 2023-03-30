var form = document.getElementById("dataForm");

form.addEventListener('submit',function(e){
e.preventDefault()

var name = document.getElementById("FormControlInputName").value
var email = document.getElementById("FormControlInputEmail").value
var comment = document.getElementById("FormControlComment").value

// fetch post request
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    name: name,
    email: email,
    comment: comment,
    id: this.id
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  .then((response) => response.json())
  .then((data) => console.log(data));
  })


  var getForm = document.getElementById("getForm");
  getForm.addEventListener('submit',function(e){
    e.preventDefault()
  fetch('https://jsonplaceholder.typicode.com/posts/${data}')
  .then((response) => response.json())
  })
  .then(function(data){     
        console.log(data)
        var results = document.getElementById("results");
        console.log(results);
        results.innerHTML=`<p>Nombre: ${data.name}</p> 
      </p>  <p>Email: ${data.email} </p><p>Comentario: ${data.comentario} </p> <p>id: ${data.id} </p>`
    });
