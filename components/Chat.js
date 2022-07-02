import React, {useState, useEffect, useContext} from 'react'
import { GunContext } from '../context/gunContext'
import ChevronDown from '../assets/svg/chevronDown'
import ChevronUp from '../assets/svg/chevronUp'
import shiba from '../assets/shiba.png'
import Image from 'next/image'
import Button from './Button'
import ChatCard from './ChatCard'
import {faker} from '@faker-js/faker'

const styles = {
    bullishLabel: `flex cursor-pointer active:bg-green-600 items-center text text-green-600 border border-green-600 h-min px-2 rounded-lg`,
    bearishLabel: `flex cursor-pointer active:bg-red-500 items-center text-[#EA3943] border border-red-600 h-min px-2 rounded-lg`,
    input: `w-full bg-[#323546] p-4 outline-none rounded-xl`,
    chatContainer: `p-5 bg-[#222531] rounded-xl max-h-ful`,
    flexBetween: `flex justify-between`,
    flexCenter: `flex justify-center items-center`,
    chat: `max-w-lg min-w-full`,
    postButtonContainer: `flex align-center justify-end`,
    boldText: `font-bold`,

    activeBullishLabel: `flex cursor-pointer bg-green-600 items-center text-white border border-green-600 h-min px-2 rounded-lg`,
    activeBearishLabel: `flex cursor-pointer bg-red-500 items-center text-white border border-red-600 h-min px-2 rounded-lg`,
}

const Chat = () => {

    const [message, setMessage] = useState('')
    const [bullishValue, setBullishValue] = useState(true)

    // const {gun, getMessages, state} = useContext(GunContext)

    // useEffect(() => {
    //     getMessages('GUN_REF_7')
    // }, [])

    // console.log(state.messages)
    
    const formattedMessagesArray = () => {
        
        const uniqueArray = state.messages.filter((value, index) => {
            const _value = JSON.stringify(value)

            return(
                index ===
                state.messages.findIndex(obj => {
                    return JSON.stringify(obj) === _value
                })
            )
        })
        return uniqueArray
    }

    const sendMessage = () => {
        if(message.trim() === '') return
        const messagesRef = gun.get('GUN_REF_7')

        const newMessage = {
            sender: faker.name.findName(),
            avatar: 'https://avatars.dicebear.com/api/big-ears/fake-profile-picture.svg',
            content: message.trim(),
            isBullish: bullishValue,
            createdAt: Date().substring(4,11),
            messageId: Date.now()
        }

        messagesRef.set(newMessage)
        setMessage('')
    }

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
                            <b>sleeper-agent</b>
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
            <Button 
                label='Post' 
                // onPress={sendMessage} 
            />
        </div>

        {/* format the message then insert chatCard for every message  */}
        {/* {formattedMessagesArray().slice(0).reverse().map((message, index) => {
            <ChatCard 
                key={index}
                sender={message.sender}
                senderUsername={message.username}
                senderAvatar={'https://avatars.dicebear.com/api/big-ears/fake-profile-picture.svg'}
                bullish={message.isBullish}
                timeStamp={message.createdAt}
                content={message.content}
                likes='2.7k'
                comments='19k'
            />
        })} */}
        <ChatCard />
    </>

    
  )
}

export default Chat