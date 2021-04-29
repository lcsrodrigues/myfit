import { createContext } from 'react';

type ICtxt = {
    profileID: number,
    setProfileID: (p: number) => void
}

export const ctxt = createContext<ICtxt>({
    profileID: 0,
    setProfileID: () => { }
});