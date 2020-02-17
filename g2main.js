var columns = document.getElementsByClassName("column");
var start = document.getElementById("startBtn");
var modal = document.getElementById("myModal");
var btnc = document.getElementById("cancelBtn");
var span = document.getElementsByClassName("close")[0];
var imgs=document.getElementsByTagName("img");
var res=[];
var j=1;
var c;
<div id="myModal" class="modal">
  
<div class="modal-content">
  <span class="close">&times;</span>
  <div class="yesno"><input type="button" name="start" value="Yes" class="play" id="yesBtn" /></div>
  <div class="yesno"><input type="button" name="start" value="No" class="play" id="noBtn" /></div>
</div>
</div>
start.onclick = function () {
for(r=0;r<4;r++)
{
  c=Math.floor(Math.random() * 16);
  if(res.indexOf(c)==-1)
    res.push(Math.floor(Math.random() * 16)); 
    else
    r--;   
}
console.log(res);
   for(i=0;i<4;i++)
   {
      columns[res[i]].innerHTML ="<img src=./images/"+j+".png>";
   j++;   
   }
}
///////////////////////////////////////////////////////////////////
btnc.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}