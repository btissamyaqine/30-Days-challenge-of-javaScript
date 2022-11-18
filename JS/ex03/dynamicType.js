// create a dynamicType object that works like below!
const dynamicType = {
  put : function (nbr) {
    let n= nbr
    return n;
  },
  // change : function(str) {
  //   // how pass n value fron=m put to this function ? 
  //   let n = this.put;
  //   if (str == "String") {
  //     toString(n);
  //   } else if (str = "Object") {

  //   } else if (str == "Array") {
  //     Array.from(String(numToSeparate), Number);
  //   }
  //   return nbr2;
  // },
  printType: function() {
    console.log(this.put);
  }, 
}
dynamicType.put(42);
// dynamicType.change("Array");
dynamicType.printType();
// dynamicType.change("String");
// dynamicType.printType();
// console.log(dynamicType.printType());
// console.log(typeof(dynamicType.printType()));

