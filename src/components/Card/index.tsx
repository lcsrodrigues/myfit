import styles from './style.module.scss';
import { useRouter } from 'next/router';

type ICard = {
    title: string;
    iconName?: string;
    routerPage?: string;
}

function Card({ title, iconName, routerPage }: ICard) {

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

type ICardExercicio = {
    title: string;
    description?: string;
    image?: string;
    repetition: string;
    series: string;
    id: Number;
    userID?: Number;
}

function CardExercicio({ title, description, image, repetition, series, id, userID }: ICardExercicio) {

    return (
        <div className={styles.cardExercicio}>
            {
                <div className={styles.image}>
                    <img src={""} />
                </div>
            }
            <div className={styles.info}>
                <div className={styles.title}>
                    <span>{title}</span>
                </div>
                <div className={styles.repetition}>
                    <span>{repetition}</span>
                </div>
                <div className={styles.description}>
                    <span>{description}</span>
                </div>
            </div>
        </div>
    )
}

type ICardRefeicao = {
    title: string;
    description?: string;
    id: Number;
    userID?: Number;
    schedule: string;
}

function CardRefeicao({ title, description, schedule, id, userID }: ICardRefeicao) {

    return (
        <div className={styles.cardRefeicao}>
            <div className={styles.info}>
                <div className={styles.title}>
                    <span>{title} | {schedule}</span>
                </div>
                <hr />
                <div className={styles.description}>
                    <span>{description}</span>
                </div>
            </div>
        </div>
    )
}

export {
    Card,
    CardExercicio,
    CardRefeicao
}

