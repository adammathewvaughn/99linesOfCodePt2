

let friends = ["Tom", "John", "Bobby", "Tim", "Jimmy",]

for (let i = 0; i < friends.length; i++) {

    for (let j = 99; j > 0; j--) {
        // console.log(friends[i] + " " + j);
        if (j > 2) {
            console.log(j + "lines of code in the file, " + j + "lines of code." + friends[i] + "Strike one out, clear it all out, " + (j - 1) + "lines of code in the file.");
        } else if (j == 2) {
            console.log(j + "lines of code in the file, " + j + "lines of code." + friends[i] + "Strike one out, clear it all out," + (j - 1) + "more line of code in the file.");
        } else {
            console.log(j + "line of code in the file, " + j + "line of code." + friends[i] + "Strike one out, clear it all out, no more lines of code in the file.");
        }
    }
}