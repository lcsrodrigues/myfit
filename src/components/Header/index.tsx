import styles from './style.module.scss';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    const eventHandler = (e) => {
        e.preventDefault();
        router.push('/')
    }

    return (
        <div className={styles.header} onClick={(e) => eventHandler(e)}>
            <span>MY FIT</span>
        </div>
    )
}