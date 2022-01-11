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

    for (let count = 99; count > 1; count--) {
        if (count == 1) {
            theSong = "${verse4}";
        }

        else {
            lines = "lines";
        }
        let verse1 = `${count} ${lines} of code in my file, ${count} ${lines} of cooode. `;
        let verse2 = 'Stand up and shout, "Comment one out!" ';
        let verse3 = `${count - 1} ${lines} of code in my file. `;
        let verse4 = "One more line of code in my file.";
        let verse5 = "No more lines of code in my file.";
        let theSong = `${verse1} ${verse2} ${verse3}`;
        if (count == 1) {
            theSong = `${verse4}`;
        }
         if (count == 0){
            theSong = `${verse5}`;
        }

        button.addEventListener("click", function () {
            for (let i = 0; i < friendslist.length; i++) {
                let div = document.createElement("div");
                document.body.appendChild(div);
                document.body.appendChild(para);
                document.body.appendChild(h3);
                h3.textContent = `${friendslist[i]}`;
                h3.appendChild(para);
                para.textContent = `${theSong}`;

            };
            
        });
    };
});




    // for (let j = 99; j > 0; j--) {
    //     console.log(friends[i] + " " + j);
    //     if (j > 2) {
    //             console.log (`${friendslist[i]} ${j} + lines of code in the file, ${j} lines of code. strikes one out, clears it all out, ${j-1} lines of code in the file.`);
    //     } else if (j == 2) {
    //             console.log (`${friendslist[i]} ${j} + lines of code in the file, ${j} lines of code. strikes one out, clears it all out, ${j-1} more line of code in the file.`);
    //     } else {
    //             console.log (`${friendslist[i]} ${j} + line of code in the file, ${j} line of code. strikes one out, clears it all out, no more lines of code in the file.`);
    //     }
    //  }
    // });
