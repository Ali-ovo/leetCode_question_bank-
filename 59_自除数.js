var selfDividingNumbers = function(left, right) {
  let res=[];
  for(let i=left;i<=right;i++){
      i.toString().split('').every(num=>i%parseInt(num)===0)&&res.push(i)
  }
  return res;
};

console.log(selfDividingNumbers);