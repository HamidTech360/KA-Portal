import { createContext, useState } from 'react';

export const userContext = createContext();

const UserDetailsProvider = (props) => {
        
    const [userDetails, setUserDetails] = useState();

    return (
        <userContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </userContext.Provider>
    );
};

export default UserDetailsProvider;