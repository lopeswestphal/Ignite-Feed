import styles from './Avatar.module.css';

/*
No javaS podemos trabalhar com desestruturação:
const name = { title: "Lopes"}
const { tittle } = name;
*/
export function Avatar({ hasBorder = true, src }) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}   
        />
    );
}