let id = parseInt(window.localStorage.getItem('maxTagId') || '0')

const generateId = () => {
    id += 1
    window.localStorage.setItem('maxTagId', id.toString())
    return id
}

export {generateId}
