import Description  from "./Description";
import Title from "./Titles";
import  data from '../data/TitleViewer.json';
import styles from "./TitleViewer.module.css"
import { useState } from "react";

function TitleViewer(){
    // const data = [
    //     {id: 1, title: 'Title 1', description: 'Description 1'},
    //     {id: 2, title: 'Title 2', description: 'Description 2'},
    //     {id: 3, title: 'Title 3', description: 'Description 3'},
    //     {id: 4, title: 'Title 4 '.repeat(10), description: 'Description 4'.repeat(100)}
    // ]
    const [selectedDesc, setSelectedDesc] = useState(data[0].description)
    
    const getTitle = (data)=>{
        setSelectedDesc(data.description)
    }
    
    
    return(
    <div className={styles.container}>
        <div className={styles.titleViewContainer}>
            <div className={styles.titleContainer}>
                {data.map((data)=>(
                    <Title key = {data.id} title ={data.title} description ={data.description} 
                    onclick={()=>getTitle(data)} className ={styles.title}></Title>
                ))}
            </div>
            <Description description={selectedDesc} className ={styles.description}/>
        </div>
    </div>
    )
}

export default TitleViewer;