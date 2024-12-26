//#region Show Time
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const milisecond = document.getElementById('milisecond')

function update() {
    const now = new Date()
    hour.innerText = now.getHours().toString().padStart(2, '0')
    minute.innerText = now.getMinutes().toString().padStart(2, '0')
    second.innerText = now.getSeconds().toString().padStart(2, '0')
    milisecond.innerText = now.getMilliseconds().toString().padStart(3, '0')
}

setInterval(update, 1)
//#endregion

//#region Set font sizes
function setFontSizes() {
    console.log(document.getElementsByClassName('fontsize'))
    Array.from(
        document.getElementsByClassName('fontsize')
    ).forEach(
        (element) => {
            element.style.fontSize = element.clientHeight + "px"
            element.style.lineHeight = element.clientHeight + "px"
        }
    )
}

setFontSizes()
window.addEventListener('DOMContentLoaded', setFontSizes)
window.addEventListener('resize', setFontSizes)
//#endregion

//#region Hide mouse
let mouseHider = null
window.addEventListener(
    'mousemove',
    () => {
        document.body.style.cursor = 'default'
        clearTimeout(mouseHider)
        mouseHider = setTimeout(() => {
            document.body.style.cursor = 'none'
        }, 3000)
    }
)

document.body.style.cursor = 'none'
//#endregion