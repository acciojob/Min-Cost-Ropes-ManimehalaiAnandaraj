function mincost(arr)
{ 
//write your code here
// return the min cost
let cost=0;
	while (arr.length>1 && arr.length<10**3 && arr <10**4) 
	{
		let first=arr.shift();
		let second=arr.shift();
		let sum=first+second;
		cost +=sum;
		let insert=false;
		if(sum<arr[i])
		{
			arr.splice(i,0,sum);
			insert=true;
			break;
		}
	}
 if(!insert)
 return cost;
}

module.exports=mincost;
