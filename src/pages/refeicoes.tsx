import Header from "../components/Header";
import styles from '../../styles/refeicoes.module.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CardRefeicao } from '../components/Card';
import { ctxt } from '../components/Context/index';
import SubHeader from "../components/SubHeader";

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
            <SubHeader>
                <span>/Refeições</span>
            </SubHeader>
            <div className={styles.containerRefeicoes}>
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
