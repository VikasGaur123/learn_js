let str="3030+40000";
let l=str.length;
let=num1="";
let=num2="";
for(i=0;i<=l;i++)
{
  if('+'==str[i])
  {

    for(j=i+1;j<l;j++)
    {
      num2+=str[j];
    }
    break;
  }
  else{
    num1+=str[i];
  }
}
console.log(num1);
console.log(num2);
let num11=Number(num1);
let num22=Number(num2);
console.log(typeof num11);
console.log(typeof num22);
let total=num11+num22;
console.log(total);