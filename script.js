function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b) => a-b);
let cost=0;
	while (arr.length>1 ) 
	{
		let sum=arr.shift()+arr.shift();
		cost +=sum;
		let i=0;
		while (i<arr.length && sum>arr[i]) {
			i++;
		}
			arr.splice(i,0,sum);
			
		}

 return cost;
}

module.exports=mincost;
