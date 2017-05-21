var staff = [];
var students = [];

var app = function(){
  url = "http://hp-api.herokuapp.com/api/characters"
  makeRequest(url, afterRequest)

}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  console.log("request")
  request.open("GET", url)
  request.addEventListener("load", callback)
  request.send()
}

var makeStudentStaffChart = function(students, staff){

  var series = [
    {
      name: "Student-Staff Ratio at Hogwarts",
      data: [
        {
          name: "Students",
          y: students.length,
          color:"#00ba2f"
        },
        {
          name: "Staff",
          y: staff.length,
          color: "#73b7ff"
        }
      ]
    }
  ]

  new PieChart("Hogwarts", series, "#staff-students")
}
var afterRequest = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var characters = JSON.parse(jsonString);

  sortCharacters(characters);
  makeStudentStaffChart(students, staff);

  // listCharacters(characters)
}

var sortCharacters = function(characters){
  characters.forEach(function(character){
    if(character.hogwartsStudent === true){
      students.push(character);
    }
    else if (character.hogwartsStaff === true) {
      staff.push(character);
    }
  })
}

// var listCharacters = function(characters){
//   var list = document.getElementById('awesome');
//   characters.forEach(function(character){
//     var li = document.createElement('li')
//     console.log(character.name)
//     li.innerText = character.name
//     list.appendChild(li)
//   })
// }



window.addEventListener("load", app)
