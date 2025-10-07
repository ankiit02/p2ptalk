import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

//INTERNAL IMPORT
import { 
    CheckIfWalletConnected,
     ConnectWallet,
      connectingWithContract,
    } from '../Utils/apiFeature';

    export const ChatAppContext = React.createContext();

    export const ChatAppProvider = ({children}) => {
        const title = "Hey Welcome to Chat App";
        return (
            <ChatAppContext.Provider value={{title}}>
                {children}
            </ChatAppContext.Provider>
        )
    }
