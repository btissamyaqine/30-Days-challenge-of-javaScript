const stackCreate = () => ({
  arr: [],
  stackEmpty(stack){
    if(!Array.isArray(stack)){
      console.log(0);
    }
    if(this.arr.stack.lenght == 0){
      console.log(1);
    }else{
      console.log(0);
    }
  },
  stackPush(stack, data){
    if(!Array.isArray(stack)){
      console.log(0);
    } 
    if(!this.arr.stack.lenght == 0){
        this.arr.unshift(data);
    }
  },
  stackPeek(stack){
      stack = Object.assign({}, this.arr);
      console.log(stack)
  },
  stackPop(stack){
  stack = this.arr.shift();
  console.log(stack)
  },
});
