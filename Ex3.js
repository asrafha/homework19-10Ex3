arr = [10 , 0 , 23 ,65]
count = 0 
for (i = 0 ; i < arr.length ; i++  ){
  arr[i] == 0 ? count = count + 1 : count = count + 0;
}
console.log(count)