import { createContext } from 'react';

type ICtxt = {
    profileID: number,
    setProfileID: (p: number) => void,
    profileName: string,
    setProfileName: (p: string) => void,
}

export const ctxt = createContext<ICtxt>({
    profileID: 0,
    setProfileID: () => { },
    profileName: "",
    setProfileName: () => { }
});