import styles from './TitleViewer.module.css';

function Title(props){
    return (
        <div onClick={props.onclick} className={props.className}>
        <div className={styles.titleText}>{props.title}</div>
        </div>
    )
}

export default Title;