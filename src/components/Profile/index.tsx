import { useContext, useEffect, useState } from 'react';
import styles from './style.module.scss';
import { ctxt } from '../../components/Context/index';

type iProfile = {
    id: number;
    name: string;
    age?: Number;
    gender?: string;
    photo?: string;
}

export default function Profile({ id, name, age, gender, photo }: iProfile) {

    const { setProfileID } = useContext(ctxt);
    const [randomColor, setRandomColor] = useState("");
    useEffect(() => {
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }

            setRandomColor(color);
        }

        getRandomColor()
    }, [])

    const eventHandler = () => {
        setProfileID(id);
    }

    return (
        <div className={styles.profile} style={{ background: randomColor }} onClick={eventHandler}>
            {
                photo != null ?
                    <img src={photo} />
                    :
                    <span>{name.substring(0, 1).toUpperCase()}</span>
            }
        </div>
    )
}