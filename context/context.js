import {createContext, useState, useEffect} from 'react'
import {useMoralis} from 'react-moralis'
import {useMoralisQuery} from 'react-moralis'

import {
    dogeAbi,
    daiAbi,
    linkAbi,
    usdcAbi,
    dogeAddress,
    linkAddress,
    daiAddress,
    usdcAddress,
} from '../lib/constants'

export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({children}) => {

    const {isAuthenticated, user, Moralis} = useMoralis()

    // useMoralisQuery()

    const [currentAccount, setCurrentAccount] = useState('')
    const [openBuyCryptoModal, setOpenbuyCryptoModal] = useState(false)
    const [fromToken, setFromToken] = useState('')
    const [toToken, setToToken] = useState('')
    const [amount, setAmount] = useState('')

    useEffect(() => {
        if(isAuthenticated) {
            const account = user.get('ethAddress')
            setCurrentAccount(account)
        }
    }, [isAuthenticated])

    
    const getTopTenCoins = async () => {
        try {
            const res = await fetch('/api/getTopTen')
            const data = await res.json()
            return data.data.data
        } catch(e) {
            console.log(e.message)
        }
    }
    return (
        <CoinMarketContext.Provider
            value = {{ 
                getTopTenCoins
            }}
        >
            {children}
        </CoinMarketContext.Provider>
    )
}