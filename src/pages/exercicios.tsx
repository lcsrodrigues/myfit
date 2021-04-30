import { useState, useEffect, useContext } from 'react';
import Header from "../components/Header";
import styles from '../../styles/exercicios.module.scss';
import axios from 'axios';
import { CardExercicio } from '../components/Card';
import { ctxt } from '../components/Context/index';

export default function Exercicios() {

    const [listExercicios, setListExercicios] = useState([]);
    const [filterAba, setFilterAba] = useState("Serie A");

    const { profileID } = useContext(ctxt);

    useEffect(() => {
        const getAllExercicios = () => {
            axios.get('https://webapimydelivery.com.br/Exercicios')
                .then(response => {
                    setListExercicios(response.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getAllExercicios();
    }, [])

    const handleEvent = (e) => {
        setFilterAba(e.target.textContent);
    }

    return (
        <>
            <Header />
            <div className={styles.filterSeries}>
                <div className={styles.abaFilter} onClick={(e) => handleEvent(e)}><span>Serie A</span></div>
                <div className={styles.abaFilter} onClick={(e) => handleEvent(e)}><span>Serie B</span></div>
                <div className={styles.abaFilter} onClick={(e) => handleEvent(e)}><span>Serie C</span></div>
                <div className={styles.abaFilter} onClick={(e) => handleEvent(e)}><span>Serie D</span></div>
            </div>
            <div className={styles.containerExercicios}>
                {
                    listExercicios.length > 0 ?
                        listExercicios.map(exercicio => {
                            if (exercicio.PESSOA_ID == profileID && exercicio.SERIE == filterAba) {
                                return (
                                    <CardExercicio title={exercicio.TITULO} repetition={exercicio.REPETICAO} id={exercicio.id} series={exercicio.SERIE} key={exercicio.id} />
                                )
                            }
                        })
                        :
                        <h1 className={styles.h1}>Nenhum exercicio cadastrado</h1>
                }
            </div>
        </>
    )
}
