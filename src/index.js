module.exports = function check(str, bracketsConfig) {
  var loop=0;
  var strLeng = str.length;
  bracketsConfig.forEach((rule,ID) => {
      bracketsConfig[ID] = rule[0]+rule[1]
  });
  while(str.length>0){
      for(let i=0;i<bracketsConfig.length;i++){
          str = str.replace(`${bracketsConfig[i]}`,'')
          if(str.length==strLeng){
              loop++;
              continue;
          }
          strLeng=str.length;
          loop=0;
      }
      if(loop>bracketsConfig.length){return false;}
  }
  return  true;
}
