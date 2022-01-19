import axios from 'axios'
import React,{useState} from 'react'
import './_GifGenerator.css'

const GifGenerator = () => {
    const [query, setQuery] = useState('hola')
    const [gifs, setGifs] = useState([])
    const handleGifs = async () =>{
        const response = await axios.get('https://api.giphy.com/v1/gifs/search',{
            params:{
                api_key: process.env.REACT_APP_GIPHY_KEY_NAME,
                q: query,
                limit: 5,
            }
        })
        console.log(response)
        setGifs(response.data.data)
    }
    return (
        <div className="gifGenerator">
            <input 
            type="text" 
            className="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleGifs}>New Gifts</button>
            
            <div className="gift">
            {
                gifs.map((item) => {
                    console.log(item)
                    return <img src={item.images.fixed_height_small.url} alt="gifs"/>
                })
            }
            </div>
        </div>
    )
}

export default GifGenerator
