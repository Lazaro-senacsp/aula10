const artistas = ["ines brasil", "grechen", "andressa urach","valesca popozuda"];

//' - laço for

for(let i = 0; i < artistas.length; i++){
  document.getElementbyid("lista1").innerHTML += "<li>" + artistas[i] + "</li>" + members[i];
  }

  for(let i = 0; i < artistas.length; i++){
  document.getElementbyid("lista1").innerHTML += "<li>" + artistas[i] + "</li>" + members[i];
  }
  // laço while

  let i = 0;
   while (i <members.length){
        document.getElementById("lista2").innertext += "<li>" + members[i] + "</li>"
    }
