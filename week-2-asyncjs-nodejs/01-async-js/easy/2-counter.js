let c = 0

function counter(c){
  setTimeout(()=>{
    c++
    console.log(c)
    counter(c)
  },1000)
}

counter(c);
