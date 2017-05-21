var app = function(){
  url = "http://hp-api.herokuapp.com/api/characters"
  makeRequest(url, afterRequest)
  console.log("app")
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  console.log("request")
  request.open("GET", url)
  request.addEventListener("load", callback)
  request.send()
}

var afterRequest = function(){
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  var characters = JSON.parse(jsonString);
  console.log(characters)
  listCharacters(characters)
}

var listCharacters = function(characters){
  var list = document.getElementById('awesome');
  characters.forEach(function(character){
    var li = document.createElement('li')
    console.log(character.name)
    li.innerText = character.name
    list.appendChild(li)
  })
}



window.addEventListener("load", app)
