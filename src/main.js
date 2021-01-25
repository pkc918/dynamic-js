const cssString = `
.main {
  height: 50vh;
  background-color: #93b8ca;
  border-top: 1px solid #ccc;
}
.head {
  position: relative;
  width: 420px;
  height: 400px;
  border: 2px solid #06090c;
  margin: 10px auto;
  border-radius: 50% 50% 45% 45%;
  background-color: #1e90ff;
}
.head .face {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 360px;
  height: 300px;
  border: 2px solid #06090c;
  border-radius: 50% 50% 45% 45%;
  background-color: #ffffff;
  transform: translateX(-50%);
}
.head .collar {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: 50px;
  border: 2px solid #06090c;
  border-radius: 25px;
  background-color: #ff0000;
}
.head .collar .bells {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 60px;
  height: 60px;
  border: 2px solid #06090c;
  animation: moving 2.2s infinite linear;
  border-radius: 50%;
  transform: translateX(-50%);
  background-color: #ffff00;
  overflow: hidden;
}
.head .collar .bells::before {
  content: '';
  display: block;
  width: 70px;
  height: 8px;
  border: 2px solid #06090c;
  position: absolute;
  top: 25%;
  left: -5px;
}
.head .collar .bells::after {
  content: '';
  display: block;
  width: 15px;
  height: 10px;
  background-color: #000000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50% 45% 50% 45%;
}
.head .collar .bells .crack {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 20px;
  background-color: #000000;
}
.eye {
  position: absolute;
  left: 50%;
  top: -45px;
  transform: translateX(-50%);
  width: 180px;
  height: 110px;
  display: flex;
}
.eye::before,
.eye::after {
  content: '';
  display: block;
  width: 50%;
  border-radius: 45% 45% 50% 50%;
  background-color: #fff;
  border: 2px solid #000;
}
.eye .eyeball::before,
.eye .eyeball::after {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  background-color: #000000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
}
.eye .eyeball::before {
  left: 60px;
}
.eye .eyeball::after {
  right: 60px;
}
.face .nose {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  border: 2px solid #000;
  border-radius: 50%;
  background-color: #ff0000;
}
.face .nose::before {
  content: '';
  display: block;
  width: 15px;
  height: 15px;
  background-color: #fff;
  position: absolute;
  top: 20%;
  right: 5px;
  border-radius: 50%;
}
.whisker_style {
  width: 100px;
  border-top: 2px solid #000;
}
.whisker_style::before,
.whisker_style::after {
  display: block;
  content: '';
  width: 100px;
  border-top: 2px solid #000;
}
.whisker_style {
  position: absolute;
  top: 40%;
  left: 10%;
}
.whisker_style::before {
  transform: rotate(15deg);
  position: absolute;
  top: -30px;
  left: 5px;
}
.whisker_style::after {
  transform: rotate(-15deg);
  position: absolute;
  top: 30px;
  left: 5px;
}
.whisker_right {
  transform: rotateY(180deg);
  position: absolute;
  left: 60%;
}
.mouth {
  width: 240px;
  height: 200px;
  border-bottom: 2px solid #000;
  position: absolute;
  bottom: 24%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 45% 45%;
}
.mouth::before {
  content: '';
  display: block;
  width: 2px;
  height: 130px;
  background-color: #000;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
@keyframes moving {
  0% {
    transform: translateX(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) rotate(360deg);
  }
}
`
const style = document.querySelector('.style')
const test = document.querySelector('.test')
let n = 1;
let styleString = ''
let timer = setInterval(() => {
  n += 1
  if(n == cssString.length){
    console.log(111111111111)
    window.clearInterval(timer)
    return
  }
  if(cssString[n] === '\n'){
    styleString += '<br>'
  } else if(cssString[n] === ' '){
    styleString += '&nbsp;'
  } else{
    styleString += cssString[n]
  }
  test.innerHTML = styleString
  style.innerHTML = cssString.substring(0,n)
  test.scrollTop = test.scrollHeight
}, 0);