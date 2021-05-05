import Header from "../components/Header";
import styles from '../../styles/exercicios.module.scss';
import SubHeader from "../components/SubHeader";

export default function Duvidas() {
    return (
        <>
            <Header />
            <SubHeader>
                <span>/Dúvidas</span>
            </SubHeader>
            <h1 className={styles.h1}>Em contrução - Dúvidas</h1>
        </>
    )
}
