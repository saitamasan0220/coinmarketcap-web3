import React, {useState, useEffect} from 'react'
import ChevronDown from '../assets/svg/chevronDown'
import ChevronUp from '../assets/svg/chevronUp'
import shiba from '../assets/shiba.png'
import Image from 'next/image'
import Button from './Button'

const styles = {
    bullishLabel: ``,
    bearishLabel: ``,
}

const Chat = () => {

    // const sendMessage = () => {

    // }

    const [message, setMessage] = useState('')
    const [bullishValue, setBullishValue] = useState(true)
  return (
    <>
        <div className={styles.chat}>
            <div className={styles.flexBetween}>
                <p className={styles.boldText}>Live Shiba Inu Chat</p>
                <p className="text-[#6188FF]">See more</p>
            </div>

            <br />

            <div className={styles.chatContainer}>
                <div className={styles.flexBetween}>
                    <div className={styles.flexCenter}>
                        <div>
                            <Image
                                src={shiba}
                                width={70}
                                height={70}
                            />
                        </div>
                        <div className="text-left mr-10">
                            <b>saitamasan</b>
                            <p className="text-gray-400">@twitterhandle</p>
                        </div>
                    </div>

                    <div className={styles.flexCenter}>
                        <div 
                            className={!bullishValue ? styles.bullishLabel : styles.activeBullishLabel}
                            onClick={() => setBullishValue(true)}
                        >
                            <ChevronUp fill='#17C784' />
                            <small className="ml-1">Bullish</small>
                        </div>
                        &nbsp; &nbsp;
                        <div 
                            className={
                                bullishValue ? styles.bearishLabel : styles.activeBearishLabel
                            }
                            onClick={() => setBullishValue(false)}
                        >
                            <ChevronDown fill='#a52b2b' />
                            <small className="ml-1">Bearish</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex">
            <div className="flex items-center text text-green-600">
                <ChevronUp fill='#22bc64' />
                <small className="ml-1">Bullish</small>
            </div>
            &nbsp; &nbsp; 
            <div className="flex items-center text-red-500">
                <ChevronDown fill='#a52b2b' />
                <small className="ml-1">Bearish</small>
            </div>
        </div>

        <input 
            className={styles.input}
            placeholder="What's happening on BTC?"
            value={message}
            onChange={e => setMessage(e.target.value)}

        />

        <div className={styles.postButtonContainer}>
            <Button label='Post' onPress={sendMessage} />
        </div>

        {/* <Chat /> */}
    </>

    
  )
}

export default Chat