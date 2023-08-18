

function main(msg) {
  msg = msg.replace(/\n/g, "<br>")
  if(msg.trim().length==0){
    return;
  } 
  document.querySelector('.group .sticky-bottom textarea').value = "";
  document.querySelector(".group div div:first-child").innerHTML += "<p id='me'>"+msg+"</p>";

  원소기호 = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca"];
  전기음성도 = ["2.1", "x", "1.0", "1.5", "2.0", "2.5", "3.0", "3.5", "4.0", "x", "0.9", "1.2", "1.5", "1.8", "2.1", "2.5", "3.0", "x", "0.8", "1.0"];
  분자 = {
    "H H O": "H2O",
    "H H H N": "NH3"

  };

  input = msg;
  input = input.trim().split(" ").sort((a, b) => { return 원소기호.indexOf(a) - 원소기호.indexOf(b); });
  output = [];
  output = 분자.hasOwnProperty(input.join(" ")) ? 분자[input.join(" ")] : "분자를 찾을 수 없습니다.";
  output += "<br><br>" + input.map(element => "원소기호: " + element + "<br>원자번호: " + (원소기호.indexOf(element) + 1) + "<br>전기음성도: " + 전기음성도[원소기호.indexOf(element)]).join("<br><br>");
  document.querySelector(".group div div:first-child").innerHTML += "<p id='you'>"+output+"</p>";
  document.querySelector(".group div div:first-child").scrollTop = document.querySelector(".group div div:first-child").scrollHeight;
}
/*
document.querySelector('.group .sticky-bottom textarea').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    main(document.querySelector('.group .sticky-bottom textarea').value); 
  }
});
*/