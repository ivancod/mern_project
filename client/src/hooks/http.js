import { useState, useCallback } from 'react'

export const useHttp = () => {

    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            const response = await fetch(url, { method, body, headers })
            if(!response.ok) useError(response.message)        
            const data = await JSON.parse(response)

            if(data || data.token) {
                
            }


            setLoading(false)
        } catch(e) {
            setLoading(false)
            useError(e.message)
        }
    }, [])

    const clearError = useCallback( useError(null), [])

    return { loading, request, error, clearError}
}