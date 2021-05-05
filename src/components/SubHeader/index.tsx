import { useContext } from 'react'
import styles from './style.module.scss';
import { ctxt } from '../../components/Context';

export default function SubHeader({ children }) {

    const { profileName } = useContext(ctxt);

    return (
        <div className={styles.subHeaders}>
            <span>Protocolo {profileName} - </span>
            {children}
        </div>
    );
}