function mincost(arr)
{ 
//write your code here
// return the min cost
let cost=0;
	while (arr.length>1 && arr.length<10**3 && arr <10**4) 
	{
		let newrope=arr[0]+arr[1];
		cost +=newrope;
		arr.splice(0,2,newrope);
		arr.sort((arr[0],arr[1]) =>arr[0]-arr[1];)
	}
  return cost;
}

module.exports=mincost;
