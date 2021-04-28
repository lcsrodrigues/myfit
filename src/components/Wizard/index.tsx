import { Card } from '../Card';
import styles from './style.module.scss';
import { MyFitEnum, MyFitRouter } from '../../Enum';

export default function Wizard() {
    return (
        <div className={styles.wizard}>
            <Card routerPage={MyFitRouter.EXERCICIOS} iconName={'anilha'} title={MyFitEnum.EXERCICIOS} />
            <Card routerPage={MyFitRouter.REFEICOES} iconName={'comida'} title={MyFitEnum.REFEICOES} />
            <Card routerPage={MyFitRouter.PROTOCOLOS} iconName={'documento'} title={MyFitEnum.PROTOCOLOS} />
            <Card routerPage={MyFitRouter.PROGRESSO} iconName={'graficoProgresso'} title={MyFitEnum.PROGRESSO} />
            <Card routerPage={MyFitRouter.CONTATO} iconName={'interrogacao'} title={MyFitEnum.CONTATO} />
            <Card routerPage={MyFitRouter.DUVIDAS} iconName={'telefone'} title={MyFitEnum.DUVIDAS} />
        </div>
    )
}