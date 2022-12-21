import _ from 'lodash'

let zoomRect = null
let zoomImg = null
let posWidth = 100
let posHeight = 100

function removeChildrenFromContainer() {
    const zoomContainer = document.querySelector('#zoom-container')

    if (!zoomContainer) {
        return
    }

    while (zoomContainer.childNodes.length) {
        zoomContainer.removeChild(zoomContainer.childNodes[0])
    }
}

function startZoom(url, element) {
    const zoomContainer = document.querySelector('#zoom-container')

    if (!zoomContainer) {
        return
    }

    if (url) {
        const img = new Image()

        zoomImg = img

        zoomContainer.removeAttribute('selected')
        zoomContainer.classList.add('active')
        zoomContainer.classList.add('loading')

        img.onload = function () {
            zoomContainer.classList.remove('loading')

            removeChildrenFromContainer()

            zoomContainer.appendChild(img)

            const container = zoomContainer.getBoundingClientRect()
            const me = (zoomRect = element.getBoundingClientRect())
            const body = document.body.getBoundingClientRect()

            zoomContainer.style.top = window.innerHeight / 2 - container.height / 2 - body.top - 200 + 'px'

            posWidth = (container.width / img.naturalWidth) * me.width
            posHeight = (container.height / img.naturalHeight) * me.height
        }

        img.onerror = function () {
            out()
        }

        img.src = url
    }
}

function stopZoom() {
    const zoomContainer = document.querySelector('#zoom-container')

    if (zoomContainer) {
        removeChildrenFromContainer()
        zoomContainer.removeAttribute('selected')
        zoomContainer.classList.remove('active')
        zoomContainer.classList.remove('loading')
    }
}

function over(e) {
    e.stopPropagation()

    startZoom(e.target.querySelector('img[data-zoom]').dataset.zoom, e.target)
}

function out(e) {
    e.stopPropagation()

    stopZoom(e.target)
}

function move(e) {
    e.preventDefault()
    e.stopPropagation()

    if (!(zoomRect && zoomImg && e)) {
        return
    }

    const cx = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX) - zoomRect.left
    const cy = (e.changedTouches ? e.changedTouches[0].clientY : e.clientY) - zoomRect.top

    const x = Math.min(Math.max(0, cx - posWidth / 2), zoomRect.width - posWidth)
    const y = Math.min(Math.max(0, cy - posHeight / 2), zoomRect.height - posHeight)

    const transX = (x / zoomRect.width) * zoomImg.naturalWidth
    const transY = (y / zoomRect.height) * zoomImg.naturalHeight

    _.forEach(['', '-webkit-', '-moz-', '-ms-'], function (key) {
        zoomImg.style[key + 'transform'] = 'translate(-' + transX + 'px, -' + transY + 'px)'
    })
}

export const zoomHandler = { over, out, move }
