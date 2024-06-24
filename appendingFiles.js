const fs = require("fs"); // file system module
function appendToFile(filepath, sentence) {
    const content = `\n${sentence}`; // dodava nova linija na "text-file.txt" kade shto ke se "append" novata rechenica
    fs.appendFile(filepath, content, {encoding: "utf8"}, (err) => { // 4 params, encoding - optional
        if (err) {
            console.error("Error appending to file:", err);
        }
        else {
            console.log("Sentence appended successfully.");
        }
    });
}
const filePath = "text-file.txt";
const sentence = "Vangel Hristov \n24 \nStrumica";

appendToFile(filePath, sentence);