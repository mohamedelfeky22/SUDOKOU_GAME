var columns = document.getElementsByClassName("column");
var main = document.getElementById("main");
var start = document.getElementById("startBtn");
var cancel = document.getElementById("cancel");
var time1 = document.getElementsByTagName("span")[3];
var time2 = document.getElementsByTagName("span")[5];
var lastScore = document.getElementById("lastscore");
var counter = 58;
var counter2 = 59;
var m = 0;
var leftarr = [0, 4, 8, 12];
var rightarr = [3, 7, 11, 15];
var botarr = [12, 13, 14, 15];
var toparr = [0, 1, 2, 3];
var randomcolumns = [];
var imgObject = document.getElementsByTagName("img");
var res = [];
var j = 1;
var btnc = document.getElementById("cancelBtn");
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var modalw = document.getElementById("myModalw");
var modall = document.getElementById("myModall");
var no = document.getElementById("noBtn");
var check = document.getElementById("checkBtn");
var playerName = document.getElementById("player");
var playAgainl = document.getElementById("agBtn");
var playAgainw = document.getElementById("agBtnw");
homepagel = document.getElementById("hlBtn");
homepagew = document.getElementById("hwBtn");
playerName.innerText = "Welcome" + "  : " + sessionStorage.getItem('name');

start.onclick = function () {
   start.disabled = true;//in order not to press it again
   ////////////////////////////////////////////////////////
   //randomize images
   // for loop for make random array and this will be the random columns 
   for (r = 0; r < 4; r++) {
      c = Math.floor(Math.random() * 16);
      if (res.indexOf(c) == -1)
         res.push(c);
      else
         r--;
   }
   //pushing images on columns[random array]
   for (i = 0; i < 4; i++) {
      columns[res[i]].innerHTML = "<img src=./images/" + j + ".png>";
      columns[res[i]].value = j;
      j++;
   }
   /////////////////////////////////////////////////
   //start time
   var idt1 = setInterval(function () {
      if (counter >= 0) {
         time2.innerText = counter;
         counter--;
      }
      else {
         time1.innerText = 0;
         if (counter2 >= 0) {
            time1.innerText = counter2;
            counter2--;
         }
         else {
            check.onclick();
            clearInterval(idt1);
         }
      }
   }, 1000);
   //end time
   ////////////////////////////////////////////
   //moving arrows 
   columns[0].classList.add("highlight");
   window.addEventListener("keydown", function (e) {
      switch (e.keyCode) {
         case 37:
            columns[m].classList.remove("highlight");
            if (leftarr.includes(m)) {
               m = m + 3;
               columns[m].classList.add("highlight");
            }
            else {
               m--;
               columns[m].classList.add("highlight");
            }

            break;
         case 39:
            columns[m].classList.remove("highlight");
            if (rightarr.includes(m)) {
               m = m - 3;
               columns[m].classList.add("highlight");
            }
            else {
               m++;
               columns[m].classList.add("highlight");
            }
            break;
         case 40:
            columns[m].classList.remove("highlight");
            if (botarr.includes(m)) {
               m = m - 12;
               columns[m].classList.add("highlight");
            }
            else {
               m = m + 4;
               columns[m].classList.add("highlight");
            }
            break;
         case 38:
            columns[m].classList.remove("highlight");
            if (toparr.includes(m)) {
               m = m + 12;
               columns[m].classList.add("highlight");
            }
            else {
               m = m - 4;
               columns[m].classList.add("highlight");
            }
            break;
         ////putting pictures depending on numbers of pictures
         case 49:
            columns[m].innerHTML = "<img src=./images/1.png>";
            columns[m].value = 1;//vaule here to use in condition for check if palyer (win||Lose)
            break;
         case 50:
            columns[m].innerHTML = "<img src=./images/2.png>";
            columns[m].value = 2;
            break;
         case 51:
            columns[m].innerHTML = "<img src=./images/3.png>";
            columns[m].value = 3;
            break;
         case 52:
            columns[m].innerHTML = "<img src=./images/4.png>";
            columns[m].value = 4;
            break;
      }
   });
}
//end start button
//////////////////////////////////////////////
//cancel button
btnc.onclick = function () {
   modal.style.display = "block";
}
span.onclick = function () {
   modal.style.display = "none";
}
no.onclick = function () {
   modal.style.display = "none";
}
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
////////////////////////////////////////////
//check button 
var ele, row, col;
var flag = 0;
var nr = 3;// num Of comparsion  for raws
var nc = 3;//num of compasion for columns
ele = 0;


check.onclick = function () {
   for (; ele < 15 && (flag == 0); ele++) {
      if (botarr.includes(ele))//because of the last row we canat make compartion with columns and foor loop not happen because nc=0
         col = ele - 4;
      else
         col = ele + 4; //for comparise with columns before the last raw
      row = ele + 1; //for comparise with raws
      if (ele > nr) {
         nr = nr + 4;////when moved to aonther raw to keep the number of comparsion
         nc--;////when moved to aonther column to keep the number of comparsion
      }
      for (var compr = 0; compr < (nr - ele) && flag == 0; compr++) {
         if (columns[ele].value == columns[row].value)//row
            flag = 1;
         row++;
      }
      for (var compc = 0; compc < nc && flag == 0; compc++) {

         if (columns[ele].value == columns[col].value)//column
            flag = 1;
         col = col + 4;
        // console.log(col);
      }
   }
   if (flag == 0) {
      modalw.style.display = "block";
      window.sessionStorage.setItem('score', "Win");
   }
   else {
      modall.style.display = "block";
      window.sessionStorage.setItem('score', "Lose");
   }
}
///////////////////////////////////
//playagain and Last score it appear for seconds
playAgainl.onclick = function () {
   lastScore.innerText = "LastScore:" + window.sessionStorage.getItem("score");
   window.open("Game.html", "_self");
}
/////////////////////////////////////////
playAgainw.onclick = function () {
   lastScore.innerText = "LastScore:" + window.sessionStorage.getItem("score");
   window.open("Game.html", "_self");
}
///////////////////////////////////////////
//for homepage in win&&lose pop-up
homepagel.onclick = function () {
   window.open("Home.html", "_self");
}

homepagew.onclick = function () {
   window.open("Home.html", "_self");
}





