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
    const [showModal, setShowModal] = useState(false)
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
            <div className='pt-20'>
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
                    <img src={imgURL} alt='meme' className='w-50 h-auto shadow-lg rounded-md  ' />
                    <button className='my-6 px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-md shadown-md text-white'

                        onClick={
                            () => {
                                setShowModal(true)
                            }
                        }>Mint this Meme</button>
                </div>
            </div>
            {showModal ? (
                <>
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                            {/*content*/}
                            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                                {/*header*/}
                                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                                    <h3 className='text-3xl font-semibold'>
                                        Predict the price by getting a ticket.
                                    </h3>
                                    <button
                                        className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                                        onClick={() => setShowModal(false)}>
                                        <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className='relative p-6 flex-auto'>

                                    <p className='overflow-clip'>
                                        You need to login with you Deso Identity to participate
                                        in the quest
                                    </p>



                                </div>
                                {/*footer*/}
                                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                                    <button
                                        className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                        type='button'
                                        onClick={() => setShowModal(false)}>
                                        Close
                                    </button>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
            ) : null}
        </div>
    )
}


