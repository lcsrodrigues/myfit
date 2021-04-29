import { useState, useEffect, useContext } from 'react';
import styles from './style.module.scss';
import { useRouter } from 'next/router';
import axios from 'axios';
import Profile from '../Profile';

export default function Header() {
    const router = useRouter();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getAllUsers = () => {
            axios.get('https://webapimydelivery.com.br/Usuarios')
                .then(response => {
                    setUsers(response.data);
                })
                .catch(err => { console.log(err) })
        }

        getAllUsers();
    }, [])

    const eventHandler = (e) => {
        e.preventDefault();
        router.push('/')
    }

    return (
        <div className={styles.header}>
            <div className={styles.sideLeft} onClick={(e) => eventHandler(e)}>
                <span>MY FIT</span>
            </div>
            <div className={styles.sideRight}>
                {
                    users &&
                    users.map(user => {
                        return (
                            <Profile name={user.NOME} id={user.id} key={user.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}