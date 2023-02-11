function showFilter(day){
  var form = document.getElementById("form");
  var filter = document.getElementById("search");
  form.style.display="none";
  filter.style.display="block";
}

function add(){
  var task = document.getElementById("taskDescription").value;
  var listDay=getDays();
  var listTask = []
  listDay.forEach(element => {
    listTask.push({
      task,
      day:element
    })
  });
  localStorage.setItem("list",JSON.stringify(listTask))
  window.alert('inserido')
}

function getDays(){
  var seg = document.getElementById("inlineCheckbox1").checked;
  var ter = document.getElementById("inlineCheckbox2").checked;
  var qua = document.getElementById("inlineCheckbox3").checked;
  var qui = document.getElementById("inlineCheckbox4").checked;
  var sex = document.getElementById("inlineCheckbox5").checked;
  var sab = document.getElementById("inlineCheckbox6").checked;
  var dom = document.getElementById("inlineCheckbox7").checked;
  var listDay = [];
  if (seg){
    listDay.push('seg')
  }
  if (ter){
    listDay.push('ter')
  }
  if (qua){
    listDay.push('qua')
  }
  if (qui){
    listDay.push('qui')
  }
  if (sex){
    listDay.push('sex')
  }
  if (sab){
    listDay.push('sab')
  }
  if (dom){
    listDay.push('dom')
  }
  return listDay;
}