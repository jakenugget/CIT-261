var doc = document;

window.onload = function() {
  var toDoList = [];

  if (localStorage.getItem("toDoList") !== null) {
    toDoList = JSON.parse(localStorage["toDoList"]);
    var result = "Previous Scores:<br>";
    for (var i = 0; i < toDoList.length; i++) {
      result += "- " + toDoList[i] + "<br>";
    }
    doc.getElementById("list").innerHTML = result;
  }

  doc.getElementById("addToList").onclick = function() {
    var toDo = doc.getElementById("whatToDo").value;
    toDoList.push(toDo);

    var result = "";
    for (var i = 0; i < toDoList.length; i++) {
      result += toDoList[i] + "<br>";
    }
    doc.getElementById("list").innerHTML = result;
    doc.getElementById("whatToDo").value = "";

    localStorage["toDoList"] = JSON.stringify(toDoList);
  };

  doc.getElementById("deleteList").onclick = function() {
    toDoList = [];
    doc.getElementById("list").innerHTML = "";
    localStorage.removeItem("toDoList");
  };
  var toDoList2 = [];

  if (localStorage.getItem("toDoList2") !== null) {
    toDoList2 = JSON.parse(localStorage["toDoList2"]);
    var result2 = "Previous Scores:<br>";
    for (var i = 0; i < toDoList2.length; i++) {
      result2 += "- " + toDoList2[i] + "<br>";
    }
    doc.getElementById("list2").innerHTML = result2;
  }

  doc.getElementById("addToList2").onclick = function() {
    var toDo2 = doc.getElementById("whatToDo2").value;
    toDoList2.push(toDo2);

    var result2 = "";
    for (var i = 0; i < toDoList2.length; i++) {
      result2 += toDoList2[i] + "<br>";
    }
    doc.getElementById("list2").innerHTML = result2;
    doc.getElementById("whatToDo2").value = "";

    localStorage["toDoList2"] = JSON.stringify(toDoList2);
  };

  doc.getElementById("deleteList2").onclick = function() {
    toDoList2 = [];
    doc.getElementById("list2").innerHTML = "";
    localStorage.removeItem("toDoList2");
  };
};
