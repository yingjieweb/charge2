let id = parseInt(window.localStorage.getItem('maxTagId') || '1')

const generateId = () => {
    window.localStorage.setItem('maxTagId', id.toString())
    return id++
}

export {generateId}
