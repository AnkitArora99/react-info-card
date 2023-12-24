function Title(props){
    const title = props.title;
    return (
        <div onClick={props.onclick}style={{cursor:'pointer'}}>
        <div>{title}</div>
        </div>
    )
}

export default Title;