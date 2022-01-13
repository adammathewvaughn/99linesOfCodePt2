 document.addEventListener("DOMContentLoaded", function () {
     document.body.style.backgroundColor = "blanchedalmond";
     let div = document.createElement("div");
     div.className = "friend";
     let para = document.createElement("p");
     let h3 = document.createElement("h3");
     let button = document.createElement("button");
     document.body.appendChild(button);
     button.innerText = "Sing!";
     let friendslist = ["Tom", "John", "Bobby", "Tim", "Jimmy",];
     let lines = "lines";
     let count = 99;
     let theSong = `${count} ${lines} of code in my file \n 
     ${count} ${lines} of cooode.\n 
     Stand up and shout, "Comment one out!" \n
     ${count - 1} ${lines} of code in my file.\n`;

     
     for (let count = 99; count > 1; count--) {
     button.addEventListener("click", function () {
             for (let i = 0; i < friendslist.length; i++) {
                 let div = document.createElement("div");
                 document.body.appendChild(div);
                 document.body.appendChild(para);
                 document.body.appendChild(h3);
                 h3.textContent = `${friendslist[i++]}`;
                 div.appendChild(para);
                 para.innerText = theSong;
             };
         });
         if (count == 1) {
             lines = "one more line"; 
         }
         let verse2 = "No more lines of code in my file.";
         if (count == 0){
             theSong = `${verse2}`;
         }
        
         else {
             lines = "lines";
         }
        
         }

     });





    //  for (let j = 99; j > 0; j--) {
    //      console.log(friendslist[i] + " " + j);
    //      if (j > 2) {
    //              console.log (`${friendslist[i]} ${j} + lines of code in the file, ${j} lines of code. strikes one out, clears it all out, ${j-1} lines of code in the file.`);
    //      } else if (j == 2) {
    //              console.log (`${friendslist[i]} ${j} + lines of code in the file, ${j} lines of code. strikes one out, clears it all out, ${j-1} more line of code in the file.`);
    //      } else {
    //              console.log (`${friendslist[i]} ${j} + line of code in the file, ${j} line of code. strikes one out, clears it all out, no more lines of code in the file.`);
    //      }
    //   }
 //  });
