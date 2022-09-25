 const randomFloor = () => Math.floor(Math.random()*1000);
 const randomArray=new Array(100).fill(null).map(()=>randomFloor())
 const  between100and300= (x) => x>100 && x<300;
 const filterArray = randomArray.filter(x=>between100and300(x));
 const sortedArray = filterArray.sort((a,b)=>a-b);
 const sumArray = sortedArray.reduce((acc, add) => acc + add, 0);
 const doubleArray =sortedArray.map(x=>2*x);
 const depthOfFlat=5;
 const arrayFlat= new Array(1).fill([1,2,[3,4,[5,6,[7,8,[9,10]]]]]).flat(depthOfFlat);
 console.log(arrayFlat);


