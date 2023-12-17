import React, {useContext} from 'react';
import {useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react';
import { createContext } from 'react';
import { ethers } from 'ethers';


const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const {contract} = useContract
    ('0x7F2DB47c20570C92714BF57144E91CbF14b97c4c');
    const {mutateAsync: createProject} = useContractWrite(contract, 'createProject');

    var address = useAddress();
    const connect = useMetamask();

    const publishProject = async (_name, _description, _documentHash) => {
        try {
            const data = await createProject({ args: [address, _name, _description, _documentHash] });

            console.log("Success", data)
        } catch (error) {
            console.log("Failure", error)

        }
    }

    return (
        <StateContext.Provider 
            value={{
                address,
                contract,
                connect,
                createProject: publishProject,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext
(StateContext);