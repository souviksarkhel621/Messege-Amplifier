document.getElementById("btn").addEventListener("click", function(){
  var text = document.getElementById('formofmessege').value;
  var nooftimes=document.getElementById('nooftimes').value;
  var newline=document.getElementById('newline').value;
  var outputstring ="";
  for(var i=0;i<nooftimes;i++)
  {
    outputstring=outputstring+text;
    if(document.getElementById('sameline').checked == true) {
         outputstring=outputstring+" ";
} else if((document.getElementById('newline').checked == true) ) {
         outputstring=outputstring+"<br>";
}
  }
  document.getElementById("amplified").innerHTML=outputstring;
});
