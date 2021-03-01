const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) { // aqui o break não funciona no for
    if( x == 5) {
      break// nessa parte é mostrar ate sair 5 e parar
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
  if (y == 5) {
       continue
  }
  console.log(`${y} = ${nums[y]}`)
}

externo: for(a in nums) {
  for(b in nums)  {
       if(a == 2 && b ==3)  break externo
       console.log(`Par = ${a},${b}`)
  }

}
console.log('FIM!! ')