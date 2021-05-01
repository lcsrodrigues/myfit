import styles from './style.module.scss';

export default function SubHeader({ children }) {
    return (
        <div className={styles.subHeaders}>
            {children}
        </div>
    );
}