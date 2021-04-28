import { useState, useEffect } from 'react';
import Header from "../components/Header";
import styles from '../../styles/exercicios.module.scss';
import axios from 'axios';
import { CardExercicio } from '../components/Card';

export default function Exercicios() {

    const [listExercicios, setListExercicios] = useState([]);

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

    return (
        <>
            <Header />
            <div className={styles.containerExercicios}>
                {
                    listExercicios.length > 0 ?
                        listExercicios.map(exercicio => {
                            console.log(exercicio);
                            return (
                                <CardExercicio title={exercicio.TITULO} repetition={exercicio.REPETICAO} id={exercicio.id} series={exercicio.SERIE} key={exercicio.id} />
                            )
                        })
                        :
                        <h1>Nenhum exercicio cadastrado</h1>
                }
            </div>
        </>
    )
}
