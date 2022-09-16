import { useState, useEffect } from 'react'
import Deso from 'deso-protocol'
const deso = new Deso()
export default function MintPage() {
    const handleDesoLogin = async () => {

        const request: any = 3
        const response = await deso.identity.login(request)
        console.log(response)
    }
    return (
        <div>
            <button onClick={handleDesoLogin} >Login with deso</button>
        </div>
    )
}
