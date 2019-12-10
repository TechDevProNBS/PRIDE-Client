import React from 'react';
// import ShowAllThisEmployee from './MyCards';
import MyPRIDE from './MyPRIDE';

export default class MyPRIDEWall extends React.Component{
    render(){
        return(
            <div style={{position: "relative", top: "70px"}}>
                <div >
                    <MyPRIDE/>
                </div>
            </div>
        )
    }
}
