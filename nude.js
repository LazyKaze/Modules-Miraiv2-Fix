const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "nude",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "chom",
  description: "Ảnh nude",
  commandCategory: "Random-img",
  usages: "nude",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
  var link = [
"https:\/\/imgur.com\/4dvzjfE.jpg",
"https:\/\/imgur.com\/imk4fEU",
"https:\/\/imgur.com\/Ev5yBE9.jpg",
"https:\/\/imgur.com\/Z2Wu77T.jpg",
"https:\/\/imgur.com\/aB4LNr8.jpg",
"https:\/\/imgur.com\/h3sVDuL.jpg",
"https:\/\/imgur.com\/ZDITUdv.jpg",
"https:\/\/imgur.com\/UZvnaYv.jpg",
"https:\/\/imgur.com\/kecEQcP.jpg",
"https:\/\/imgur.com\/47Mrfjp.jpg",
"https:\/\/imgur.com\/gHbAtqF.jpg", 
"https:\/\/imgur.com\/Qc3S6Wf.jpg",
"https:\/\/imgur.com\/f8iHETy.jpg", 
"https:\/\/imgur.com\/A3lsuOL.jpg",
"https:\/\/imgur.com\/GmSASPR",
"https:\/\/imgur.com\/8kVXAZO",
"https:\/\/imgur.com\/4xgEsXj.jpg",
"https:\/\/imgur.com\/hckIWqq.jpg",
"https:\/\/imgur.com\/1JzJOf6.jpg",
"https:\/\/imgur.com\/Yp1czm1.jpg",
"https:\/\/imgur.com\/eTN7i1V.jpg",
"https:\/\/imgur.com\/p98lB2I.jpg",
"https:\/\/imgur.com\/afBbZV9.jpg", 
"https:\/\/imgur.com\/Rm8hhnq.jpg",
"https:\/\/imgur.com\/Q1fRfnT.jpg", 
"https:\/\/imgur.com\/pit2PD7.jpg",
"https:\/\/imgur.com\/imk4fEU",
"https:\/\/imgur.com\/31ijLVg",
"https:\/\/imgur.com\/yXI8hPB.jpg", 
"https:\/\/imgur.com\/ROSavs1.jpg",
"https:\/\/imgur.com\/LIbrSCE.jpg", 
"https:\/\/imgur.com\/eb1SWQS",
"https:\/\/imgur.com\/vXlsiyK.jpg",
"https:\/\/imgur.com\/imk4fEU", 
"https:\/\/imgur.com\/T927hv7.jpg",
"https:\/\/imgur.com\/Ev5yBE9.jpg",
"https:\/\/imgur.com\/8BblgMn",
"https:\/\/imgur.com\/DE0i5Yz.jpg",
"https:\/\/imgur.com\/8kVXAZO",
"https:\/\/imgur.com\/f8iHETy.jpg", 
"https:\/\/imgur.com\/LIbrSCE.jpg",
"https:\/\/imgur.com\/kecEQcP.jpg", 
"https:\/\/imgur.com\/ZDITUdv.jpg",
"https:\/\/imgur.com\/PxhgYkD", 
"https:\/\/imgur.com\/WCrb6Bc", 
"https:\/\/imgur.com\/Ev5yBE9.jpg",
"https:\/\/imgur.com\/oMiHwvN.jpg",
"https:\/\/imgur.com\/gHbAtqF.jpg",
"https:\/\/imgur.com\/eTN7i1V.jpg", 
"https:\/\/imgur.com\/A6lbbmZ",
"https:\/\/imgur.com\/kecEQcP.jpg", 
"https:\/\/imgur.com\/Yp1czm1.jpg",
"https:\/\/imgur.com\/KFOH63d.jpg",
"https:\/\/imgur.com\/kecEQcP.jpg",
"https:\/\/imgur.com\/nECYBa9",
"https:\/\/imgur.com\/3dhBhttps:\/\/imgur.cos:\/\/imgur.com\/Z2Wu77T.jpg",
"https:\/\/imgur.cos:\/\/imgur.com\/Z2Wu77T.jpg",
"https:\/\/imgur.cos:\/\/ixc0.jpom\/Z2Wu77T.jpg",
"https:\/\/imgur.com\/Who6xc0.jpom\/Z2Wu77T.jpg",
"https:\/\/imgur.com\/Who6xc0.jpom\/Z2Wu77T.jpg",
"https:\/\/imgur.com\/Who6xc0.jpom\/Z2Wu77T.jpg",
"https:\/\/imgur.com\/Who6xc0.jpom\/Z2Wu77T.jpg",
"https:\/\/imgur.com\/Who6xc0.jpom\/Z2Wu77T.jpg",
"https:\/\/imgur.com\/Who6xc0.jpg",
"https:\/\/imgur.com\/kWEvzJg",
"https:\/\/imgur.com\/pit2PD7.jpg",
"https:\/\/imgur.com\/Ev5yBE9.jpg",
"https:\/\/imgur.com\/vXlsiyK.jpg",
"https:\/\/imgur.com\/DE0i5Yz.jpg",
"https:\/\/imgur.com\/zSHNgl2.jpg",
"https:\/\/imgur.com\/zSHNgl2.jpg",
 "https://i.imgur.com/WxYNZ6b.jpg",
    "https://i.imgur.com/h94ZFxg.jpg",
    "https://i.imgur.com/MNmLejw.jpg",
    "https://i.imgur.com/fgM7V7c.png",
    "https://i.imgur.com/gnIu6t7.jpg",
    "https://i.imgur.com/EnQQp3T.jpg",
    "https://i.imgur.com/qJF6g4Z.jpg",
    "https://i.imgur.com/aike2co.jpg",
    "https://i.imgur.com/TJ7VRQ7.jpg",
    "https://i.imgur.com/FlESMaE.jpg",
    "https://i.imgur.com/BrHjIrV.jpg",
    "https://i.imgur.com/HK1fIoJ.jpg",
    "https://i.imgur.com/0OWSTiW.jpg",
    "https://i.imgur.com/IPoDTke.jpg",
    "https://i.imgur.com/35OGHoz.jpg",
    "https://i.imgur.com/C8r7S4A.jpg",
    "https://i.imgur.com/418EOFf.jpg",
    "https://i.imgur.com/S36latR.jpg",
    "https://i.imgur.com/bIo9GrB.jpg",
    "https:\/\/imgur.com\/A3lsuOL.jpg",
    "https:\/\/imgur.com\/RugY7kB.jpg",
    "https:\/\/imgur.com\/bJUmVkQ.jpg",
    "https:\/\/imgur.com\/hckIWqq.jpg",
    "https:\/\/imgur.com\/yXI8hPB.jpg",
    "https:\/\/imgur.com\/yXI8hPB.jpg", 
    "https:\/\/imgur.com\/ZDITUdv.jpg", 
    "https:\/\/imgur.com\/4dvzjfE.jpg",
    "https:\/\/imgur.com\/lTvizmC.jpg", 
    "https:\/\/imgur.com\/34akdUQ.jpg", 
    "https:\/\/imgur.com\/Z2Wu77T.jpg",
    "https:\/\/imgur.com\/Z2Wu77T.jpg",
    "https:\/\/imgur.com\/yXI8hPB.jpg",
    "https:\/\/imgur.com\/oMiHwvN.jpg",
    "https:\/\/imgur.com\/1JzJOf6.jpg",
    "https:\/\/imgur.com\/mEblmNu.jpg",
    "https:\/\/imgur.com\/kecEQcP.jpg", 
    "https:\/\/imgur.com\/lTvizmC.jpg", 
    "https:\/\/imgur.com\/bJUmVkQ.jpg",
    "https:\/\/imgur.com\/KapWbhH.jpg",
    "https:\/\/imgur.com\/gUjvY4Y.jpg",
    "https:\/\/imgur.com\/LIbrSCE.jpg",
    "https:\/\/imgur.com\/9tuZHgn.jpg",
    "https:\/\/imgur.com\/LIbrSCE.jpg",
    "https:\/\/imgur.com\/ZDITUdv.jpg",
    "https:\/\/imgur.com\/Ev5yBE9.jpg",
    "https:\/\/imgur.com\/RugY7kB.jpg",
    "https:\/\/imgur.com\/69o0xyB.jpg",
    "https:\/\/imgur.com\/69o0xyB.jpg",
    "https:\/\/imgur.com\/KFOH63d.jpg",
    "https:\/\/imgur.com\/Yp1czm1.jpg",
    "https:\/\/imgur.com\/T927hv7.jpg",
    "https:\/\/imgur.com\/pit2PD7.jpg", 
    "https:\/\/imgur.com\/vXlsiyK.jpg", 
    "https:\/\/imgur.com\/ROSavs1.jpg", 
    "https:\/\/imgur.com\/DE0i5Yz.jpg",
    "https:\/\/imgur.com\/oMiHwvN.jpg",
    "https:\/\/imgur.com\/9tuZHgn.jpg", 
    "https:\/\/imgur.com\/Rm8hhnq.jpg",
    "https:\/\/imgur.com\/bJUmVkQ.jpg",
    "https:\/\/imgur.com\/kecEQcP.jpg",
    "https:\/\/imgur.com\/h3sVDuL.jpg",
    "https:\/\/imgur.com\/Rm8hhnq.jpg",
    "https:\/\/imgur.com\/UZvnaYv.jpg",
    "https:\/\/imgur.com\/mEblmNu.jpg",
    "https:\/\/imgur.com\/kecEQcP.jpg", 
    "https:\/\/imgur.com\/Rm8hhnq.jpg", 
    "https:\/\/imgur.com\/Z2Wu77T.jpg", 
    "https:\/\/imgur.com\/Qc3S6Wf.jpg",
    "https:\/\/imgur.com\/Z2Wu77T.jpg",
    "https:\/\/imgur.com\/p98lB2I.jpg", 
    "https:\/\/imgur.com\/Q1fRfnT.jpg", 
    "https:\/\/imgur.com\/h3sVDuL.jpg",
    "https:\/\/imgur.com\/vsOF3NR.jpg", 
    "https:\/\/imgur.com\/69o0xyB.jpg", 
    "https:\/\/imgur.com\/bJUmVkQ.jpg",
    "https:\/\/imgur.com\/aB4LNr8.jpg",
    "https:\/\/imgur.com\/Qc3S6Wf.jpg",
    "https:\/\/imgur.com\/rsKQHRX.jpg",
    "https:\/\/imgur.com\/34akdUQ.jpg",
    "https:\/\/imgur.com\/pit2PD7.jpg", 
    "https:\/\/imgur.com\/aB4LNr8.jpg",
    "https:\/\/imgur.com\/aB4LNr8.jpg",
    "https:\/\/imgur.com\/Z2Wu77T.jpg",
    "https:\/\/imgur.com\/zSHNgl2.jpg",
    "https:\/\/imgur.com\/8ENPJC3.jpg", 
"https:\/\/imgur.com\/Yp1czm1.jpg",
"https:\/\/imgur.com\/afBbZV9.jpg",
"https:\/\/imgur.com\/NSzL0Qr.jpg",
"https:\/\/imgur.com\/gHbAtqF.jpg",
"https:\/\/imgur.com\/bJUmVkQ.jpg",
"https:\/\/imgur.com\/NSzL0Qr.jpg",
"https:\/\/imgur.com\/ROSavs1.jpg",
"https:\/\/imgur.com\/RugY7kB.jpg", 
"https:\/\/imgur.com\/kecEQcP.jpg",
"https:\/\/imgur.com\/8ENPJC3.jpg",
"https:\/\/imgur.com\/Q1fRfnT.jpg",
"https:\/\/imgur.com\/RugY7kB.jpg",
"https:\/\/imgur.com\/yXI8hPB.jpg",
"https:\/\/imgur.com\/Z2Wu77T.jpg",
"https:\/\/imgur.com\/rsKQHRX.jpg",
"https:\/\/imgur.com\/QAZuZLc.jpg",
"https:\/\/imgur.com\/4dvzjfE.jpg",
"https:\/\/imgur.com\/T927hv7.jpg",
"https:\/\/imgur.com\/Z2Wu77T.jpg",
"https:\/\/imgur.com\/T927hv7.jpg", 
"https:\/\/imgur.com\/LIbrSCE.jpg",
"https:\/\/imgur.com\/4dvzjfE.jpg",
"https:\/\/imgur.com\/Z2Wu77T.jpg",
"https:\/\/imgur.com\/UZvnaYv.jpg",
"https:\/\/imgur.com\/69o0xyB.jpg",
"https:\/\/imgur.com\/oMiHwvN.jpg",
"https:\/\/imgur.com\/ROSavs1.jpg",
"https:\/\/imgur.com\/kecEQcP.jpg",
"https:\/\/imgur.com\/hckIWqq.jpg", 
"https:\/\/imgur.com\/ROSavs1.jpg",
"https:\/\/imgur.com\/GISCGmr.jpg",
"https:\/\/imgur.com\/9EzIQm7.jpg",
"https:\/\/imgur.com\/UZvnaYv.jpg",
"https:\/\/imgur.com\/Z2Wu77T.jpg", 
"https:\/\/imgur.com\/9EzIQm7.jpg",
"https:\/\/imgur.com\/UZvnaYv.jpg",
"https:\/\/imgur.com\/f8iHETy.jpg",
"https:\/\/imgur.com\/oMiHwvN.jpg",
"https:\/\/imgur.com\/0NwhOsc.jpg",
"https:\/\/imgur.com\/oMiHwvN.jpg",
"https:\/\/imgur.com\/yXI8hPB.jpg",
"https:\/\/imgur.com\/p98lB2I.jpg",
"https:\/\/imgur.com\/ROSavs1.jpg",
"https:\/\/imgur.com\/pit2PD7.jpg",
"https:\/\/imgur.com\/QAZuZLc.jpg",
"https:\/\/imgur.com\/GISCGmr.jpg",
"https:\/\/imgur.com\/ROSavs1.jpg",
"https:\/\/imgur.com\/4DrUCgF.jpg",
"https:\/\/imgur.com\/eTN7i1V.jpg",
"https:\/\/imgur.com\/KFOH63d.jpg",
"https:\/\/imgur.com\/Qc3S6Wf.jpg", 
"https:\/\/imgur.com\/4DrUCgF.jpg", 
"https:\/\/imgur.com\/bJUmVkQ.jpg",
"https:\/\/imgur.com\/9tuZHgn.jpg",
"https:\/\/imgur.com\/69o0xyB.jpg",
"https:\/\/imgur.com\/T927hv7.jpg",
"https:\/\/imgur.com\/9EzIQm7.jpg",
"https:\/\/imgur.com\/0NwhOsc.jpg",
"https:\/\/imgur.com\/34akdUQ.jpg",
"https:\/\/imgur.com\/4DrUCgF.jpg",
"https:\/\/imgur.com\/mEblmNu.jpg",
"https:\/\/imgur.com\/47Mrfjp.jpg",
"https:\/\/imgur.com\/oMiHwvN.jpg", 
"https:\/\/imgur.com\/jMzUMjy.jpg",
"https:\/\/imgur.com\/gUjvY4Y.jpg",
"https:\/\/imgur.com\/0NwhOsc.jpg",
"https:\/\/imgur.com\/zSHNgl2.jpg",
"https:\/\/imgur.com\/hckIWqq.jpg",
"https:\/\/imgur.com\/Yp1czm1.jpg",
"https:\/\/imgur.com\/oMiHwvN.jpg",
"https:\/\/imgur.com\/zSHNgl2.jpg",
"https:\/\/imgur.com\/T927hv7.jpg",
"https:\/\/imgur.com\/Rm8hhnq.jpg",
"https:\/\/imgur.com\/47Mrfjp.jpg",
"https:\/\/imgur.com\/Rm8hhnq.jpg",
"https:\/\/imgur.com\/ZDITUdv.jpg",
"https:\/\/imgur.com\/yXI8hPB.jpg",
"https:\/\/imgur.com\/Yp1czm1.jpg",
"https:\/\/imgur.com\/pit2PD7.jpg",
"https:\/\/imgur.com\/oMiHwvN.jpg",
"https:\/\/imgur.com\/h3sVDuL.jpg",
"https:\/\/imgur.com\/ROSavs1.jpg",
"https:\/\/imgur.com\/69o0xyB.jpg",
"https:\/\/imgur.com\/8ENPJC3.jpg",
"https:\/\/imgur.com\/KapWbhH.jpg", 
"https:\/\/imgur.com\/Z2Wu77T.jpg", 
"https://i.imgur.com/MQmWYlg.jpg",
"https://i.imgur.com/aFihSMJ.jpg",
"https://i.imgur.com/vKk3Upu.jpg",
"https://i.imgur.com/pTW9dke.jpg",
"https://i.imgur.com/NJ2nM8R.jpg",
"https://i.imgur.com/FG2VmeN.jpg",
"https://i.imgur.com/p52xMOx.jpg",
"https://i.imgur.com/hwrAiNJ.jpg",
"https://i.imgur.com/XHVTkO0.jpg",
"https://i.imgur.com/0BZhRh9.jpg",
"https://i.imgur.com/Ejoeciw.jpg",
"https://i.imgur.com/vmaw82S.jpg",
"https://i.imgur.com/1v5mBix.jpg",
"https://i.imgur.com/bhA8Cea.jpg",
"https://i.imgur.com/8o82Jlz.jpg",
"https://i.imgur.com/qUUxLsX.jpg",
"https://i.imgur.com/ApeWTE3.jpg",
"https://i.imgur.com/cJizoU3.jpg",
"https://i.imgur.com/meyyKOj.jpg",
"https://i.imgur.com/67RloK2.jpg",
"https://i.imgur.com/k0DQD1U.jpg",
"https://i.imgur.com/kCGD4X2.jpg",
"https://i.imgur.com/mFa1ssF.jpg",
"https://i.imgur.com/XkQdPaA.jpg",
"https://i.imgur.com/FTliiTV.jpg",
"https://i.imgur.com/B8upcx0.jpg",
"https://i.imgur.com/BJlyP2U.jpg",
"https://i.imgur.com/rzqrDy7.jpg",
"https://i.imgur.com/0vMHfIE.jpg",
"https://i.imgur.com/nCIB9jQ.jpg",
"https://i.imgur.com/9SMrZnx.jpg",
"https://i.imgur.com/6xf5XVU.jpg",
"https://i.imgur.com/ow0pQad.jpg",
"https://i.imgur.com/rg2zLVf.jpg",
"https://i.imgur.com/dnM1ClW.jpg",
"https://i.imgur.com/HGZR8Nr.jpg",
"https://i.imgur.com/Xhodrhf.jpg",
"https://i.imgur.com/uH3vxBL.jpg",
"https://i.imgur.com/cnuD4QO.jpg",
"https://i.imgur.com/S8lYTz6.jpg",
"https://i.imgur.com/bKwhhXg.jpg",
"https://i.imgur.com/OIrBx7S.jpg",
"https://i.imgur.com/aA6iNio.jpg",
"https://i.imgur.com/DQBAb0X.jpg",
"https://i.imgur.com/k1O1MzW.jpg",
"https://i.imgur.com/LCUC0o0.jpg",
"https://i.imgur.com/sjArLJz.jpg",
"https://i.imgur.com/MDbriKB.jpg",
"https://i.imgur.com/YuOWXBJ.jpg",
"https://i.imgur.com/y8zHOcI.jpg",
"https://i.imgur.com/jG1VMXI.jpg",
"https://i.imgur.com/9qLfX0Q.jpg",
"https://i.imgur.com/kBRdvJx.jpg",
"https://i.imgur.com/930TZTM.jpg",
"https://i.imgur.com/vvYA4l9.jpg",
"https://i.imgur.com/pUG7vHa.jpg",
"https://i.imgur.com/2Zg4BbI.jpg",
"https://i.imgur.com/bK6E896.jpg",
"https://i.imgur.com/eYBvwH2.jpg",
"https://i.imgur.com/JofRDwd.jpg",
"https://i.imgur.com/ONNtkKz.jpg",
"https://i.imgur.com/rXyDYPy.jpg",
"https://i.imgur.com/hxVWMiT.jpg",
"https://i.imgur.com/CbYOjB5.jpg",
"https://i.imgur.com/t68UlQ8.jpg",
"https://i.imgur.com/YUZd4kd.jpg",
"https://i.imgur.com/i2xKnsc.jpg",
"https://i.imgur.com/xp6DWEV.jpg",
"https://i.imgur.com/t7QRBbg.jpg",
"https://i.imgur.com/02tzm6v.jpg",
"https://i.imgur.com/3hpJ02X.jpg",
"https://i.imgur.com/T1FyF2e.jpg",
"https://i.imgur.com/tMSjSz0.jpg",
"https://i.imgur.com/CWXXa7k.jpg",
"https://i.imgur.com/ph5WGb6.jpg",
"https://i.imgur.com/16iE2MP.jpg",
"https://i.imgur.com/1HIym0d.jpg",
"https://i.imgur.com/W0ZrbWD.jpg",
"https://i.imgur.com/j5wghyC.jpg",
"https://i.imgur.com/rQ8Vij4.jpg",
"https://i.imgur.com/WYEni8m.jpg",
"https://i.imgur.com/GRW6gDU.jpg",
"https://i.imgur.com/VTcYubR.jpg",
"https://i.imgur.com/jp58AAN.jpg",
"https://i.imgur.com/IIQSc1w.jpg",
"https://i.ibb.co/g6tsNFJ/181838jvzb5b5em545jcha.jpg",
"https://i.ibb.co/dMkRjpP/anh-sex-0121-130402-001.jpg",
"https://imgur.com/8uwiYTA.jpg",
"https://imgur.com/eJweNS3.jpg",
"https://imgur.com/qJqb8p5.jpg",
"https://imgur.com/9QpiyE4.jpg",
"https://imgur.com/50IC3Q2.jpg",
"https://imgur.com/SNzCgAn.jpg",
"https://imgur.com/RX3wwBn.jpg",
"https://imgur.com/YhDr2HJ.jpg",
"https://imgur.com/6bQallt.jpg",
"https://imgur.com/KCxaDnA.jpg",
"https://imgur.com/Mnyd0Cz.jpg",
"https://imgur.com/guqiRmv.jpg",
"https://imgur.com/KXMqVpQ.jpg",
"https://imgur.com/6eSsvac.jpg",
"https://imgur.com/EqEZgvf.jpg",
"https://imgur.com/afxYhM0.jpg",
"https://imgur.com/ZTiSmaP.jpg",
"https://imgur.com/KY1wis6.jpg",
"https://imgur.com/Crpu74F.jpg",
"https://imgur.com/yGtYBAC.jpg",
"https://imgur.com/Agjc6XQ.jpg",
"https://imgur.com/8qXX3Df.jpg",
"https://imgur.com/v9jbiVX.jpg",
"https://imgur.com/E67lTgl.jpg",
"https://imgur.com/EoGl7ct.jpg",
"https://imgur.com/LmoxdwB.jpg",
"https://imgur.com/WQl4h3O.jpg",
"https://imgur.com/JlwKQ6X.jpg",
"https://imgur.com/KNIkxjp.jpg",
"https://imgur.com/NZwshIk.jpg",
"https://imgur.com/kNRwLjr.jpg",
"https://imgur.com/iAP77qy.jpg",
"https://imgur.com/xDpV4kZ.jpg",
"https://imgur.com/J3FYNqR.jpg",
"https://imgur.com/mAonZs2.jpg",
"https://imgur.com/OiwF98o.jpg",
"https://imgur.com/8tgONOv.jpg",
"https://imgur.com/jcm52Rl.jpg",
"https://imgur.com/zSHjku1.jpg",
"https://imgur.com/oRVkvhw.jpg",
"https://imgur.com/nV8NkFE.jpg",
"https://imgur.com/5eVgciN.jpg",
"https://imgur.com/84aQnmJ.jpg",
"https://imgur.com/jCYJB35.jpg",
"https://imgur.com/B3jiMna.jpg",
"https://imgur.com/6yBLaZz.jpg",
"https://imgur.com/9L5tKlK.jpg",
"https://imgur.com/eVOFedh.jpg",
"https://imgur.com/ocNlQOG.jpg",
"https://imgur.com/yU1EbWy.jpg",
"https://imgur.com/UTLczjE.jpg",
"https://imgur.com/LjOLl5f.jpg",
"https://imgur.com/aym5e2g.jpg",
"https://imgur.com/YIhAB07.jpg",
"https://imgur.com/xMd28iz.jpg",
"https://imgur.com/OGlf2ch.jpg",
"https://imgur.com/UYWmzxj.jpg",
"https://imgur.com/PleLOgG.jpg",
"https://imgur.com/ahLOHTL.jpg",
"https://imgur.com/gkMNVDI.jpg",
"https://imgur.com/Na0ZdLK.jpg",
"https://imgur.com/tEtYINz.jpg",
"https://imgur.com/aW0SDeM.jpg",
"https://imgur.com/ed5ov4D.jpg",
"https://imgur.com/OQ1X44D.jpg",
"https://imgur.com/p9xOEnD.jpg",
"https://imgur.com/99bOEAF.jpg",
"https://imgur.com/RA9r0oW.jpg",
"https://imgur.com/RODW5WH.jpg",
"https://imgur.com/HezT9lc.jpg",
"https://imgur.com/Dc7h7F8.jpg",
"https://imgur.com/sM8KfXN.jpg",
"https://imgur.com/H0Q96cN.jpg",
"https://imgur.com/GJ1bU21.jpg",
"https://imgur.com/T2KFYkq.jpg",
"https://imgur.com/xurfJ10.jpg",
"https://imgur.com/XRKII9p.jpg",
"https://imgur.com/hdWUrW1.jpg",
"https://imgur.com/We7bDeG.jpg",
"https://imgur.com/LG1f2sJ.jpg",
"https://imgur.com/yzpDari.jpg",
"https://imgur.com/PjC8l3x.jpg",
"https://imgur.com/wb7UwMp.jpg",
"https://imgur.com/OpBC7s2.jpg",
"https://imgur.com/kRXpRdC.jpg",
"https://imgur.com/2SbL2Ms.jpg",
"https://imgur.com/gaE1bh0.jpg",
"https://imgur.com/iu507sK.jpg",
"https://imgur.com/J5cu8JP.jpg",
"https://imgur.com/tz2NuSG.jpg",
"https://imgur.com/6XQbW63.jpg",
"https://imgur.com/1LliYJz.jpg",
"https://imgur.com/GxChTZf.jpg",
"https://imgur.com/HWFRnUq.jpg",
"https://imgur.com/zN3rtmY.jpg",
"https://imgur.com/otVBO5x.jpg",
"https://imgur.com/z8o0ae0.jpg",
"https://imgur.com/fzJTOSE.jpg",
"https://imgur.com/5ykijjH.jpg",
"https://imgur.com/wLPk3wf.jpg",
"https://imgur.com/LlKAXgU.jpg",
"https://imgur.com/jIkeQ16.jpg",
"https://imgur.com/pYpjhWf.jpg",
"https://imgur.com/ZEFlK3z.jpg",
"https://imgur.com/95uc57x.jpg",
"https://imgur.com/N4ZFj90.jpg",
"https://imgur.com/PqVUbJA.jpg",
"https://imgur.com/MkReEhQ.jpg",
"https://imgur.com/oQrPB1k.jpg",
"https://imgur.com/yzSYIlf.jpg",
"https://imgur.com/ZBaheqe.jpg",
"https://imgur.com/4RywfrR.jpg",
"https://imgur.com/DPB24VF.jpg",
"https://imgur.com/4WJNj80.jpg",
"https://imgur.com/L5Wrmin.jpg",
"https://imgur.com/fuTLXlw.jpg",
"https://imgur.com/pI8Zlvt.jpg",
"https://imgur.com/aIhSCdf.jpg",
"https://imgur.com/Ch5LUql.jpg",
"https://imgur.com/Ik2Ig8j.jpg",
"https://imgur.com/btrkrXR.jpg",
"https://imgur.com/Iwnl6Sf.jpg",
"https://imgur.com/rVrTzak.jpg",
"https://imgur.com/27Qru2u.jpg",
"https://imgur.com/EqF1kMc.jpg",
"https://imgur.com/vrT5Mo1.jpg",
"https://imgur.com/xo4iNGc.jpg",
"https://imgur.com/qaB7WwI.jpg",
"https://imgur.com/Z7bpOi9.jpg",
"https://imgur.com/TouloR1.jpg",
"https://imgur.com/yPKoHep.jpg",
"https://imgur.com/NZVaMyd.jpg",
"https://imgur.com/DxomIXg.jpg",
"https://imgur.com/q9SuLBz.jpg",
"https://imgur.com/VDfVRYu.jpg",
"https://imgur.com/bYw1zsF.jpg",
"https://imgur.com/oK6ahL1.jpg",
"https://imgur.com/YLynvtf.jpg",
"https://imgur.com/j3NhYsZ.jpg",
"https://imgur.com/NRNkO2O.jpg",
"https://imgur.com/OZEFuqI.jpg",
"https://imgur.com/FpokT82.jpg",
"https://imgur.com/0LL9Hxp.jpg",
"https://imgur.com/1Soaiyn.jpg",
"https://imgur.com/HMPyKHq.jpg",
"https://imgur.com/zWVojj5.jpg",
"https://imgur.com/kjntjwj.jpg",
"https://imgur.com/zLSTIXE.jpg",
"https://imgur.com/Oz6uMd2.jpg",
"https://imgur.com/KKVHWLd.jpg",
"https://imgur.com/5FjQNEb.jpg",
"https://imgur.com/aJFg2Dz.jpg",
"https://imgur.com/yOAivdh.jpg",
"https://imgur.com/W5TBhQp.jpg",
"https://imgur.com/M0e7VGt.jpg",
"https://imgur.com/pmZ8AiZ.jpg",
"https://imgur.com/fC4Xtef.jpg",
"https://imgur.com/rXC45aE.jpg",
"https://imgur.com/NnllBLt.jpg",
"https://imgur.com/SaOIZGQ.jpg",
"https://imgur.com/rUm56VC.jpg",
"https://imgur.com/Dq2gTcw.jpg",
"https://imgur.com/koekOzo.jpg",
"https://imgur.com/k37Dkfx.jpg",
"https://imgur.com/0n5Y91R.jpg",
"https://imgur.com/tQnOOI1.jpg",
"https://imgur.com/TVlQQ9o.jpg",
"https://imgur.com/omuXpUL.jpg",
"https://imgur.com/omuXpUL.jpg",
"https://imgur.com/wk9uBdS.jpg",
"https://imgur.com/wk9uBdS.jpg",
"https://imgur.com/2YBbw62.jpg",
"https://imgur.com/3E5XdpA.jpg",
"https://imgur.com/WcA2PAI.jpg",
"https://imgur.com/3RWyCTC.jpg",
"https://imgur.com/HWePPCe.jpg",
"https://imgur.com/hO0GdyQ.jpg",
"https://imgur.com/LQsS4E7.jpg",
"https://imgur.com/6Aj57md.jpg",
"https://imgur.com/meNnX5o.jpg",
"https://imgur.com/xgOCFCk.jpg",
"https://imgur.com/c2EdibU.jpg",
"https://imgur.com/MhzZA8f.jpg",
"https://imgur.com/5YQLU8K.jpg",
"https://imgur.com/CVCYbv8.jpg",
"https://imgur.com/AgqwZ6u.jpg",
"https://imgur.com/Q2txOlE.jpg",
"https://imgur.com/JWitOGY.jpg",
"https://imgur.com/jjINww7.jpg",
"https://imgur.com/GB4faaq.jpg",
"https://imgur.com/oysnHrI.jpg",
"https://imgur.com/vxRoQIR.jpg",
"https://imgur.com/oz85hKT.jpg",
"https://imgur.com/5WOjf7G.jpg",
"https://imgur.com/EqF1kMc.jpg",
"https://imgur.com/vrT5Mo1.jpg",
"https://imgur.com/xo4iNGc.jpg",
"https://imgur.com/qaB7WwI.jpg",
"https://imgur.com/Z7bpOi9.jpg",
"https://imgur.com/TouloR1.jpg",
"https://imgur.com/yPKoHep.jpg",
"https://imgur.com/NZVaMyd.jpg",
"https://imgur.com/DxomIXg.jpg",
"https://imgur.com/q9SuLBz.jpg",
"https://imgur.com/VDfVRYu.jpg",
"https://imgur.com/bYw1zsF.jpg",
"https://imgur.com/oK6ahL1.jpg",
"https://imgur.com/YLynvtf.jpg",
"https://imgur.com/j3NhYsZ.jpg",
"https://imgur.com/NRNkO2O.jpg",
"https://imgur.com/OZEFuqI.jpg",
"https://imgur.com/FpokT82.jpg",
"https://imgur.com/0LL9Hxp.jpg",
"https://imgur.com/1Soaiyn.jpg",
"https://imgur.com/HMPyKHq.jpg",
"https://imgur.com/zWVojj5.jpg",
"https://imgur.com/kjntjwj.jpg",
"https://imgur.com/zLSTIXE.jpg",
"https://imgur.com/Oz6uMd2.jpg",
"https://imgur.com/KKVHWLd.jpg",
"https://imgur.com/5FjQNEb.jpg",
"https://imgur.com/aJFg2Dz.jpg",
"https://imgur.com/yOAivdh.jpg",
"https://imgur.com/W5TBhQp.jpg",
"https://imgur.com/M0e7VGt.jpg",
"https://imgur.com/pmZ8AiZ.jpg",
"https://imgur.com/fC4Xtef.jpg",
"https://imgur.com/rXC45aE.jpg",
"https://imgur.com/NnllBLt.jpg",
"https://imgur.com/SaOIZGQ.jpg",
"https://imgur.com/rUm56VC.jpg",
"https://imgur.com/Dq2gTcw.jpg",
"https://imgur.com/koekOzo.jpg",
"https://imgur.com/k37Dkfx.jpg",
"https://imgur.com/0n5Y91R.jpg",
"https://imgur.com/tQnOOI1.jpg",
"https://imgur.com/TVlQQ9o.jpg",
"https://imgur.com/omuXpUL.jpg",
"https://imgur.com/omuXpUL.jpg",
"https://imgur.com/wk9uBdS.jpg",
"https://imgur.com/wk9uBdS.jpg",
"https://imgur.com/2YBbw62.jpg",
"https://imgur.com/3E5XdpA.jpg",
"https://imgur.com/WcA2PAI.jpg",
"https://imgur.com/3RWyCTC.jpg",
"https://imgur.com/HWePPCe.jpg",
"https://imgur.com/hO0GdyQ.jpg",
"https://imgur.com/LQsS4E7.jpg",
"https://imgur.com/6Aj57md.jpg",
"https://imgur.com/meNnX5o.jpg",
"https://imgur.com/xgOCFCk.jpg",
"https://imgur.com/c2EdibU.jpg",
"https://imgur.com/MhzZA8f.jpg",
"https://imgur.com/5YQLU8K.jpg",
"https://imgur.com/CVCYbv8.jpg",
"https://imgur.com/AgqwZ6u.jpg",
"https://imgur.com/Q2txOlE.jpg",
"https://imgur.com/JWitOGY.jpg",
"https://imgur.com/jjINww7.jpg",
"https://imgur.com/GB4faaq.jpg",
"https://imgur.com/oysnHrI.jpg",
"https://imgur.com/vxRoQIR.jpg",
"https://imgur.com/oz85hKT.jpg",
"https://imgur.com/5WOjf7G.jpg",
"https://imgur.com/ZDITUdv.jpg",
"https://imgur.com/QAZuZLc.jpg",
"https://imgur.com/vXlsiyK.jpg",
"https://imgur.com/Ev5yBE9.jpg",
"https://imgur.com/rsKQHRX.jpg",
"https://imgur.com/p98lB2I.jpg",
"https://imgur.com/9EzIQm7.jpg",
"https://imgur.com/bJUmVkQ.jpg",
"https://imgur.com/LIbrSCE.jpg",
"https://imgur.com/Z2Wu77T.jpg",
"https://imgur.com/KapWbhH.jpg",
"https://imgur.com/4DrUCgF.jpg",
"https://imgur.com/pit2PD7.jpg",
"https://imgur.com/UZvnaYv.jpg",
"https://imgur.com/eTN7i1V.jpg",
"https://imgur.com/RugY7kB.jpg",
"https://imgur.com/0NwhOsc.jpg",
"https://imgur.com/NSzL0Qr.jpg",
"https://imgur.com/DE0i5Yz.jpg",
"https://imgur.com/A3lsuOL.jpg",
"https://imgur.com/34akdUQ.jpg",
"https://imgur.com/kecEQcP.jpg",
"https://imgur.com/ROSavs1.jpg",
"https://imgur.com/8ENPJC3.jpg",
"https://imgur.com/KFOH63d.jpg",
"https://imgur.com/T927hv7.jpg",
"https://imgur.com/oMiHwvN.jpg",
"https://imgur.com/hckIWqq.jpg",
"https://imgur.com/Rm8hhnq.jpg",
"https://imgur.com/gUjvY4Y.jpg",
"https://imgur.com/Yp1czm1.jpg",
"https://imgur.com/lTvizmC.jpg",
"https://imgur.com/47Mrfjp.jpg",
"https://imgur.com/mEblmNu.jpg",
"https://imgur.com/afBbZV9.jpg",
"https://imgur.com/jMzUMjy.jpg",
"https://imgur.com/4xgEsXj.jpg",
"https://imgur.com/vsOF3NR.jpg",
"https://imgur.com/GISCGmr.jpg",
"https://imgur.com/f8iHETy.jpg",
"https://imgur.com/aB4LNr8.jpg",
"https://imgur.com/h3sVDuL.jpg",
"https://imgur.com/gHbAtqF.jpg",
"https://imgur.com/69o0xyB.jpg",
"https://imgur.com/1JzJOf6.jpg",
"https://imgur.com/zSHNgl2.jpg",
"https://imgur.com/yXI8hPB.jpg",
"https://imgur.com/4dvzjfE.jpg",
"https://imgur.com/9tuZHgn.jpg",
"https://imgur.com/Qc3S6Wf.jpg",
"https://imgur.com/Q1fRfnT.jpg",
"https://imgur.com/ZDITUdv.jpg",
"https://imgur.com/QAZuZLc.jpg",
"https://imgur.com/vXlsiyK.jpg",
"https://imgur.com/Ev5yBE9.jpg",
"https://imgur.com/rsKQHRX.jpg",
"https://imgur.com/p98lB2I.jpg",
"https://imgur.com/9EzIQm7.jpg",
"https://imgur.com/bJUmVkQ.jpg",
"https://imgur.com/LIbrSCE.jpg",
"https://imgur.com/Z2Wu77T.jpg",
"https://imgur.com/KapWbhH.jpg",
"https://imgur.com/4DrUCgF.jpg",
"https://imgur.com/pit2PD7.jpg",
"https://imgur.com/UZvnaYv.jpg",
"https://imgur.com/eTN7i1V.jpg",
"https://imgur.com/RugY7kB.jpg",
"https://imgur.com/0NwhOsc.jpg",
"https://imgur.com/NSzL0Qr.jpg",
"https://imgur.com/DE0i5Yz.jpg",
"https://imgur.com/A3lsuOL.jpg",
"https://imgur.com/34akdUQ.jpg",
"https://imgur.com/kecEQcP.jpg",
"https://imgur.com/ROSavs1.jpg",
"https://imgur.com/8ENPJC3.jpg",
"https://imgur.com/KFOH63d.jpg",
"https://imgur.com/T927hv7.jpg",
"https://imgur.com/oMiHwvN.jpg",
"https://imgur.com/hckIWqq.jpg",
"https://imgur.com/Rm8hhnq.jpg",
"https://imgur.com/gUjvY4Y.jpg",
"https://imgur.com/Yp1czm1.jpg",
"https://imgur.com/lTvizmC.jpg",
"https://imgur.com/47Mrfjp.jpg",
"https://imgur.com/mEblmNu.jpg",
"https://imgur.com/afBbZV9.jpg",
"https://imgur.com/jMzUMjy.jpg",
"https://imgur.com/4xgEsXj.jpg",
"https://imgur.com/vsOF3NR.jpg",
"https://imgur.com/GISCGmr.jpg",
"https://imgur.com/f8iHETy.jpg",
"https://imgur.com/aB4LNr8.jpg",
"https://imgur.com/h3sVDuL.jpg",
"https://imgur.com/gHbAtqF.jpg",
"https://imgur.com/69o0xyB.jpg",
"https://imgur.com/1JzJOf6.jpg",
"https://imgur.com/zSHNgl2.jpg",
"https://imgur.com/yXI8hPB.jpg",
"https://imgur.com/4dvzjfE.jpg",
"https://imgur.com/9tuZHgn.jpg",
"https://imgur.com/Qc3S6Wf.jpg",
"https://imgur.com/Q1fRfnT.jpg", 
"https://s1.uphinh.org/2021/05/14/IMG_0046.jpg",
"https://s1.uphinh.org/2021/05/14/IMG0047.jpg", 
"https://s1.uphinh.org/2021/05/14/IMG0048.jpg", 
"https://s1.uphinh.org/2021/05/14/IMG0049.jpg", 
"https://s1.uphinh.org/2021/05/14/IMG0051.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4116.jpg", 
"https://s1.uphinh.org/2021/05/14/172a2c60d185f0ff0.jpg", 
"https://s1.uphinh.org/2021/05/14/1602x24001b4faa50631bd4d5d9483f0a361e89b601adc6b265c124b8.jpg", 
"https://s1.uphinh.org/2021/05/14/1618x100007754e9f3e1bf7a42474beabdd5eeb9da20244ada645f736.jpg", 
"https://s1.uphinh.org/2021/05/14/2000x30008cf4eaea990a54fdd89e25254fbda354ab08f256696f1ba3.jpg", 
"https://s1.uphinh.org/2021/05/14/2400x16004331eae8cfbad4b2bd1feded526a3184ef857ed351b14eb8.jpg", 
"https://s1.uphinh.org/2021/05/14/2400x1600_34774adfc8ece290d13783c179b64203.jpg", 
"https://s1.uphinh.org/2021/05/14/3200x1800_2e6ca3d6de294357e69168fe9f72fc74.jpg", 
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-10.jpg", 
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-15.jpg", 
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-16-2.jpg", 
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-22.jpg", 
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-44.jpg", 
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-54.jpg", 
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-41-26.jpg", 
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_23-59-1763cfcfe7ed904bf6.jpg", 
"https://s1.uphinh.org/2021/05/14/3.jpg", 
"https://s1.uphinh.org/2021/05/14/4.jpg", 
"https://s1.uphinh.org/2021/05/14/6.jpg", 
"https://s1.uphinh.org/2021/05/14/8.jpg", 
"https://s1.uphinh.org/2021/05/14/9.jpg", 
"https://s1.uphinh.org/2021/05/14/10.jpg", 
"https://s1.uphinh.org/2021/05/14/12.jpg", 
"https://s1.uphinh.org/2021/05/14/1350x2400_9aa16265a507803b86349e7d81b35959.jpg", 
"https://s1.uphinh.org/2021/05/14/1500x2400_7c2771e5f49f43c209b0df4a04ef8606.jpg", 
"https://s1.uphinh.org/2021/05/14/1500x2400_93c5bc18067d170d30a4af4e93be2faf.jpg", 
"https://s1.uphinh.org/2021/05/14/1500x2400_1026c39d2f1d168c223470717d53a93b.jpg",
"https://s1.uphinh.org/2021/05/14/1500x2400_b23af379d7041c29854b5f1c77c3d7f7.jpg", 
"https://s1.uphinh.org/2021/05/14/2000x3000_1c2f1e6597ffcb0b93a8bad5ed38ae8d.jpg", 
"https://s1.uphinh.org/2021/05/14/2000x3200_43632c00d4abb9806979e091c34b63d2.jpg", 
"https://s1.uphinh.org/2021/05/14/2000x3200_abb0524eb19d695ce7cddd491c206ddb.jpg", 
"https://s1.uphinh.org/2021/05/14/2100x900_74eef002650ec3308f10689946df80f6.jpg",
"https://s1.uphinh.org/2021/05/14/2400x1500_6c20aae8db9eb5e6d761434c.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000) api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`Ảnh nude\nSố Ảnh: ${link.length}\n-1000 đô !`,attachment: fs.createReadStream(__dirname + "/cache/10.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/10.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/10.jpg")).on("close",() => callback());
     }
   };
