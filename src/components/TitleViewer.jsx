import Description  from "./Description";
import Title from "./Titles";
import { useState } from "react";

function TitleViewer(){
    const data = [
        {id: 1, title: 'Title 1', description: 'Description 1'},
        {id: 2, title: 'Title 2', description: 'Description 2'},
        {id: 3, title: 'Title 3', description: 'Description 3'},
        {id: 4, title: 'Title 4', description: 'Description 4'}
    ]
    const [selectedDesc, setSelectedDesc] = useState(data[0].description)
    
    const getTitle = (data)=>{
        setSelectedDesc(data.description)
    }
    
    
    return(
    <>
        {data.map((data)=>(
            <Title key = {data.id} title ={data.title} description ={data.description} onclick={()=>getTitle(data)}></Title>
        ))}
        <Description description={selectedDesc}/>
    </>
    )
}

export default TitleViewer;