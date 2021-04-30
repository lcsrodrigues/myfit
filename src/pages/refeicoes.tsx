import Header from "../components/Header";
import styles from '../../styles/exercicios.module.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CardRefeicao } from '../components/Card';
import { ctxt } from '../components/Context/index';

export default function Refeicoes() {

    const [listRefeicoes, setListRefeicoes] = useState([]);
    const { profileID } = useContext(ctxt);

    useEffect(() => {
        const getAllRefeicoes = () => {
            axios.get('https://webapimydelivery.com.br/Refeicoes')
                .then(response => {
                    setListRefeicoes(response.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getAllRefeicoes();
    }, [])

    return (
        <>
            <Header />
            <div className={styles.containerExercicios}>
                {
                    listRefeicoes.length > 0 ?
                        listRefeicoes.map(refeicao => {
                            if (refeicao.PESSOA_ID == profileID) {
                                return (
                                    <CardRefeicao title={refeicao.TITULO} id={refeicao.id} schedule={refeicao.HORARIO} description={refeicao.DESCRICAO} key={refeicao.id} />
                                )
                            }
                        })
                        :
                        <h1 className={styles.h1}>Nenhuma refeição cadastrada</h1>
                }
            </div>
        </>
    )
}
