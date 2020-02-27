import React from 'react'

class MainLight extends React.Component{

    render(){
        console.log("me renderice")
        return(
            <div style={{backgroundColor:'black', height:'200px'}}> 
                Soy el Main
            </div>
        )
    }
}

export default MainLight