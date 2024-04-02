import { useEffect, useState } from 'react'

export default function TextComponent() {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch('/api/auth')
            .then(response => response.json())
            .then(res => setData(res.data.content))
    }, [])

    return <div>{data}</div>
}
