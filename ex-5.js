let testScore =[
  {
      name:"James",
      score:40,
  },
  {
      name:"Ann",
      score:80,
  },
  {
      name:"Joe",
      score:52,
  },
  {
      name:"Ball",
      score:67,
  },
  {
      name:"Mick",
      score:89,
  },
  {
      name:"Ole",
      score:10,
  }
];


function averageScore (testData){
  let sum=0
  let count=0;
  for (i=0;i<testData.length;i++){
      if("score" in testData[i]){
      sum=sum+testData[i].score;
      count++;
      }
  }
  if(count===0){
      return "No Valid Data"
  }
  return  sum/count;
}

console.log(averageScore(testScore));


function findMaxMin(testData){
  let max =testData[0].score;
  let count=0;
  let min =testData[0].score;
  let maxName;
  let minName;
  let result;
  // find Max Value//
  for (let i=0;i<testData.length;i++){
      if("score"in testData[i] && "name" in testData[i]){
          if(testData[i].score>max){
              max=testData[i].score;
              maxName = testData[i].name;
          }

          if(testData[i].score<min){
              min=testData[i].score;
              minName = testData[i].name;
          }
          count++;
      }
      
  }
  if (count ===0){
      return "No Valid Data"
  }

  return result=
  `${maxName} has the highest score, which is ${max} points. \n
  ${minName} has the loweset score, which is ${min} points`;
};

console.log(findMaxMin(testScore));
