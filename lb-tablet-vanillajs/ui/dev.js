const tabletWrapper = document.querySelector("#tablet-wrapper")
const indicator = document.createElement("div")
const statusBar = document.createElement("div")

Object.assign(tabletWrapper.style, {
    aspectRatio: "4 / 3",
    border: "0.5em solid black",
    borderRadius: "1.875rem",
    boxShadow: "0 0 0.1em 0.2em purple, 0 0 0 0.3em hsl(254deg, 30%, 85%)",
    overflow: "scroll"
})

Object.assign(indicator.style, {
    position: "absolute",
    top: "0",
    left: "0",
    width: "11rem",
    height: "0.28em",
    backgroundColor: "black",
    borderRadius: "100px",
    cursor: "pointer"
})

Object.assign(statusBar.style, {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "2.75em",
    display: "flex",
    alignItems: "end",
    justifyContent: "flex-start",
    paddingLeft: "3em",
    paddingRight: "3em",
    fontSize: "0.9em"
    // backgroundColor: "green"
})

const time = document.createElement("div")

time.className = "time"
time.innerText = new Date().getHours() + ":" + new Date().getMinutes()

setInterval(() => {
    time.innerText = new Date().getHours() + ":" + new Date().getMinutes()
}, 1000)

const right = document.createElement("div")

right.className = "right"
right.innerText = "100%"
right.style.marginLeft = "auto"

statusBar.appendChild(time)
statusBar.appendChild(right)

tabletWrapper.appendChild(indicator)
tabletWrapper.appendChild(statusBar)

const calculateAspectRatio = () => {
    const aspectRatio = window.innerWidth / window.innerHeight

    if (aspectRatio < 4 / 3) {
        tabletWrapper.style.width = "99.5vw"
        tabletWrapper.style.height = "auto"
        document.documentElement.style.fontSize = "1.512vw"
    } else {
        tabletWrapper.style.width = "auto"
        tabletWrapper.style.height = "99vh"
        document.documentElement.style.fontSize = "2vh"
    }

    const boundingRect = tabletWrapper.getBoundingClientRect()
    const indicatorBoundingRect = indicator.getBoundingClientRect()
    const statusBarBoundingRect = statusBar.getBoundingClientRect()

    indicator.style.top = `${boundingRect.top + boundingRect.height - indicatorBoundingRect.height * 5}px`
    indicator.style.left = `${boundingRect.left + boundingRect.width / 2 - indicatorBoundingRect.width / 2}px`

    statusBar.style.top = `calc(${boundingRect.top + statusBarBoundingRect.height}px - ${statusBar.style.height} + ${
        tabletWrapper.style.borderWidth
    })`
    statusBar.style.left = `${boundingRect.left}px`
    statusBar.style.width = `${boundingRect.width}px`
}

window.addEventListener("resize", calculateAspectRatio)

calculateAspectRatio()