<<<<<<< HEAD
function monkey() {
    let total = document.getElementById("monkeytotal").value 
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) &&Number(total)
    kick = parseInt(kick) &&Number(kick)
=======
function monkey(){
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
>>>>>>> d49cdedb4ddf248ee78c6d0e466d21a1d5833b64
    if(isNaN(total)||isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
<<<<<<< HEAD
    for (let i=1;i<=total;i++ ) {
        monkey.push(i)
    }
    let i=0
    while (monkey.length>1){
=======
    for (let i=1;i<=total;i++){
        monkey.push(i)
    }
    let i = 0
    while(monkey.length>1){
>>>>>>> d49cdedb4ddf248ee78c6d0e466d21a1d5833b64
        i++;
        head = monkey.shift()
        if(i%kick!=0){
            monkey.push(head);
        }
    }
    document.getElementById('monkeyking').innerText = monkey[0]
<<<<<<< HEAD
  }



  function stat() {
      let str = document.getElementById("str").value
      let obj = {}
      str.split('').reduce((aka,bkb) => {
          aka[bkb] ? aka[bkb]++ : aka[bkb] = 1
          return obj
      },{} )
  document.getElementById('result').innerText = JSON.stringify(obj)
=======
>>>>>>> d49cdedb4ddf248ee78c6d0e466d21a1d5833b64
}