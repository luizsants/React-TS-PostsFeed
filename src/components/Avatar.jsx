import styles from './Avatar.module.css';

export function Avatar(props) {
    return (
        <img
            className={props.hasBorder ? styles.avatar : styles.avatarWithBorder }
            src={props.src}
        />
    );
}