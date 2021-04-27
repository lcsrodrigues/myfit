import styles from './style.module.scss';
import { useRouter } from 'next/router';

type ICard = {
    title: string;
    iconName?: string;
    routerPage?:string;
}

export default function Card({ title, iconName, routerPage }: ICard) {

    const router = useRouter();

    const eventHandler = (e) => {
        e.preventDefault();
        router.push(`/${routerPage}`);
    }

    return (
        <div className={styles.card} onClick={(e) => eventHandler(e)}>
            <div className={styles.icon}>
                <img src={`${iconName}.svg`} />
            </div>
            <div className={styles.title}>
                <span>{title}</span>
            </div>
        </div>
    )
}