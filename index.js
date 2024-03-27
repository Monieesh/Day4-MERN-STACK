import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer.prompt([
    {
        message:"Enter the URl",
        name:"URL",
    }
])
.then((answers)=>{
    const url=answers.URL;
    console.log(url);

    var qrimage=qr.image(url,{type:'png'})
    qrimage.pipe(fs.createWriteStream("website_url.png"));
    fs.writeFile("URLText1.txt",url, (error)=>{
        if(error) throw error;
        console.log("File saved successfully");

    })

    fs.close();
    
})
.catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
});