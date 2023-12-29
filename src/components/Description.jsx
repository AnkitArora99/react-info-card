import styles from './TitleViewer.module.css';

function Description(props){
    const text = props.description || 'Description';
    return (
        <div className={props.className}>
        <div className={styles.descriptionText}>{text}</div> 
        </div>
    )
}
export default Description;
