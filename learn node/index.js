const fs=require('fs');
// fs.mkdirSync("thapa")
// fs.writeFileSync('thapa/bio.txt','my name is vinod thapa');
// fs.appendFileSync('thapa/bio.txt',"plz subscribe");
// const data=fs.readFileSync('thapa/bio.txt',"utf-8")
// const p=data.toString();
// fs.renameSync("thapa/bio.txt","thapa/mybio.txt")
// console.log(data,"data");
fs.unlinkSync("thapa/mybio.txt")
fs.rmdirSync("thapa")