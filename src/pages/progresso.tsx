import Header from "../components/Header";
import styles from '../../styles/exercicios.module.scss';
import SubHeader from "../components/SubHeader";

export default function Progresso() {
    return (
        <>
            <Header />
            <SubHeader>
                <span>/Progresso</span>
            </SubHeader>
            <h1 className={styles.h1}>Em contrução - Progresso</h1>
        </>
    )
}
