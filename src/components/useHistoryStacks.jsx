import { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useHistoryStack = () => {
    const location = useLocation()
    const stackRef = useRef([])
    const indexRef = useRef(-1)
    const [canGoBack, setCanGoBack] = useState(false)
    const [canGoForward, setCanGoForward] = useState(false)

    useEffect(() => {
        const stack = stackRef.current
        const existingIndex = stack.findIndex(entry => entry === location.key)

        if (existingIndex !== -1) {
        indexRef.current = existingIndex
        } else {
        const newStack = stack.slice(0, indexRef.current + 1)
        newStack.push(location.key)
        stackRef.current = newStack
        indexRef.current = newStack.length - 1
        }

        setCanGoBack(indexRef.current > 0)
        setCanGoForward(indexRef.current < stackRef.current.length - 1)
    }, [location.key])

    return { canGoBack, canGoForward }
}