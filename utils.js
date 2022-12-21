import { nanoid } from 'nanoid'

export function AddToCart(store, localStorage, item) {
    store.commit('cart/updateItem', item)
    localStorage.setItem('*?storage^@cart', JSON.stringify(store.state.cart.items))
}

export function getPartnerUrl(context, uri) {
    const token = context.$auth.getToken('local')
    const url = process.env.DASHBOARD_BASE_URL.trim('/') + '/' + (uri || '')

    if (token) {
        return url + '?token=' + token.substr(7)
    }

    return url
}

export const arrayColumn = (arr, column) => arr.map((x) => x[column])

export const formatPrice = (price) => parseFloat(price).toFixed(2)

export function uid(length) {
    if (!length) {
        length = 10
    }

    return nanoid(length)
}

export function getMediaUrl(mediaObj) {
    const image = mediaObj.find((m) => m.url)
    if (image) {
        return image.url
    }

    return null
}

export function getAppearanceStyles(appearance) {
    if (appearance.texture) {
        return { backgroundImage: 'url(' + appearance.thumbnail + ')' }
    }

    if (appearance.colors.length == 1) {
        return { background: appearance.colors[0].value }
    }

    const colors = appearance.colors.map((color) => color.value)
    let gradient = ''

    colors.forEach((c, i) => {
        gradient += c + ' 0 ' + (i + 1) * 50 + '%'

        if (i != colors.length - 1) {
            gradient += ', '
        }
    })

    return { background: 'linear-gradient(to right, ' + gradient + ')' }
}

export function chunkPopular(obj, maxColumn, itemCount) {
    const result = []
    const tempItems = obj

    let itemPerColumn = itemCount

    while (true) {
        const items = []

        if (tempItems.length > itemCount / 2 && tempItems.length < maxColumn * 2) {
            itemPerColumn = itemCount / 2
        }

        maxColumn--

        for (let i = 0; i < itemPerColumn; i++) {
            items.push(tempItems.pop())
        }

        result.push(items)

        if (tempItems.length < itemCount) {
            if (tempItems.length === itemCount - 1) {
                itemPerColumn = itemCount / 2
            } else {
                itemPerColumn = 1
            }
        }

        if (maxColumn === itemCount / 2 && tempItems.length === itemCount) {
            itemPerColumn = itemCount / 2
        }

        if (maxColumn <= 1) {
            itemPerColumn = tempItems.length
        }

        if (maxColumn < 1) {
            break
        }
    }

    return result.reverse()
}

export function getImageLightness(imageSrc, callback) {
    const img = document.createElement('img')
    img.src = imageSrc
    img.style.display = 'none'
    img.crossOrigin = 'Anonymous'
    document.body.appendChild(img)

    let colorSum = 0

    img.onload = function () {
        // create canvas
        const canvas = document.createElement('canvas')
        canvas.width = this.width
        canvas.height = this.height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(this, 0, 0)

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data
        let r, g, b, avg

        for (let x = 0, len = data.length; x < len; x += 4) {
            r = data[x]
            g = data[x + 1]
            b = data[x + 2]

            avg = Math.floor((r + g + b) / 3)
            colorSum += avg
        }

        const brightness = Math.floor(colorSum / (this.width * this.height))

        callback(brightness)
    }
}
export function change(oldArray, oldIndex, newIndex) {
    return oldArray.map((item, index, array) => {
        if (index === oldIndex) return array[newIndex]
        else if (index === newIndex) return array[oldIndex]
        else return item
    })
}
