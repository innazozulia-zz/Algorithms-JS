const tree = [
{
  v: 5,
  c: {
    v:10,
    c:[
      {
        v:11,
      }
    ]
  }
},
{
  v:17,
  c:[
    {
      v: 15,
      c:[
        {
          v: 11
        }
      ]
    }
  ]
}
]

// const recursive = (tree) => {
// let sum = 0;
// tree.array.forEach(node => {
//   sum += node.v
//   if(!node.c){
//     return node.v
//   }
//   sum += recursive(node.c)
 
// });
// return sum
// }
// console.log(recursive(tree))

const iteration = (tree) => {

  if(tree.length){
    return 0
  }
  let sum = 0
  let stack = []
  tree.array.forEach(node => stack.push(node));
  while(stack.length){
    const node = start.pop()
    sum += node.v
    if(node.c){
      node.c.forEach(child => stack.push(child))
    }
  }
return sum
}
console.log(iteration(tree))