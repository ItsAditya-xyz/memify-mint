import { useState, useEffect } from 'react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Deso from 'deso-protocol'
import NavBar from './Navbar'
const deso = new Deso()
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}
export default function MintPage() {
    const [imageSource, setImageSource] = useState('')
    const [imageCaption, setImageCaption] = useState('')
    const query = useQuery()
    console.log(query)
    const imgURL: any = query.get("imgURL")
    const caption: any = query.get('caption')
    console.log(`imgURL: ${imgURL} and caption: ${caption}`)
    useEffect(() => {
        if (imgURL && caption) {
            setImageSource(imgURL)
            setImageCaption(caption)
        }
    }, [imgURL, caption])
    const handleDesoLogin = async () => {

        const request: any = 3
        const response = await deso.identity.login(request)
        console.log(response)
    }
    return (
        <div>
            <NavBar />
            <div className='pt-16'>
                {/* <button onClick={handleDesoLogin} >Login with deso</button> */}
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-baseline space-x-2 justify-center my-4'>
                        <p className='text-lg font-semibold'>Caption:</p>
                    <input
                        value={imageCaption}
                        onChange={(e) => setImageCaption(e.target.value)}
                        className='w-96 h-10 px-4 py-2 mb-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500'
                    ></input>
                    </div>
                    <img src={`https://i.redd.it/${imgURL}`} alt='meme' className='w-50 h-auto shadow-md rounded-md px-1 py-1 ' />
                    <button className='my-3 px-6 py-3 bg-green-400 hover:bg-green-600 rounded-md shadown-md'>Mint this Meme</button>
                </div>
            </div>

        </div>
    )
}


