
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = "blanchedalmond";
    let friendsdiv = document.createElement("div");
    let songdiv = document.createElement("div");  //     
    friendsdiv.className = "friendsdiv";
    songdiv.className = "songdiv";
    let para = document.createElement("p");
    let h3 = document.createElement("h3");
    let button = document.createElement("button");
    document.body.appendChild(button);
    button.innerText = "Sing!";
    let lines = "lines";
    let friendslist = ["Tom", "John", "Bobby", "Tim", "Jimmy",];
    
    for (let i = 0; i < friendslist.length; i++) {
            button.addEventListener("click", function () {
            
            for (let count = 99; count > 1; count--) {//counts down from 99 to 1 if count is greater than 1
                
                document.body.appendChild(friendsdiv);
                friendsdiv.appendChild(h3);
                h3.innerText = friendslist[i];
                friendsdiv.appendChild(songdiv);
                songdiv.appendChild(para);
                let theSong = `${count} ${lines} of code in my file 
                ${count} ${lines} of cooode.
                Stand up and shout, "Comment one out!"
                ${count - 1} ${lines} of code in my file.`;
                para.innerText = theSong;
                if (count = 1) {
                    lines = "line";
                }
                else {
                    lines = "lines";
                if (count = 0) {
                    theSong = `No more lines of code in my file.`;
                }
           }
        }
    });
};
});


//  var friends = ['Bill','Bob','Jim','Jimmy','Charles'];
// for (var i = 0; i< friends.length; i++){
    //     console.log("\n" + friends[i].toUpperCase() + ": ");
    //     for (var j = 99; j > 1; j--){
        //         console.log(" " + String(j) + " lines of code in the file "+String(j)+" lines of code;  " + friends[i] + " strikes one out, clears it all out," + String(j-1) + " more lines of code in the file.");
        //     for (var j = 99; j > 0; j--){
            //         if(j>2){
                //             console.log(" " + j + " lines of code in the file "+j+" lines of code, " + friends[i] + " strikes one out, clears it all out," + (j-1) + " more lines of code in the file.");
                //         }else if(j === 2){
//             console.log(" " + j + " lines of code in the file " + j + " lines of code, " + friends[i] + " strikes one out, clears it all out," + (j-1) + " more line of code in the file.");
//         }else{
//            console.log(" " + j +  " line of code in the file, " + j + " line of code,  "+ friends[i]+  " strikes one out, clears it all out, no more lines of code in the file.");           
//         }
//     }
//    console.log(" 1 line of code in the file, 1 line of code;  "+ friends[i]+  " strikes one out, clears it all out, no more lines of code in the file.");            
// }
// }



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
 // });

