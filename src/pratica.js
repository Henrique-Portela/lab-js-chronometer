let counter = 1

const callback = () => {
    console.log(counter)
    timeoutId = setTimeout(callback, 1000)
    setTimeout(callback, 1000)
    counter +=1

    if(counter > 10) {
        clearTimeout(timeoutId)
    }
}

let timeoutId = setTimeout(callback, 1000)


/*let i = 1
const intervalId = setInterval(() => {
    console.log(i)
    i++
    if(i>10) clearInterval(intervalId)

}, 1000)**/


let i = 10
const intervalId = setInterval(() =>{
    if(i > 0){
        console.log(i)
    } else {
        console.log('Pop!')
        clearInterval(intervalId)
    }
    i--

}, 1000)