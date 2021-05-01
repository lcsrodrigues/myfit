import Header from "../components/Header";
import styles from '../../styles/exercicios.module.scss';
import SubHeader from "../components/SubHeader";

export default function Contato() {
    return (
        <>
            <Header />
            <SubHeader>
                <span>Contato</span>
            </SubHeader>
            <h1 className={styles.h1}>Em contrução - Contato</h1>
        </>
    )
}
