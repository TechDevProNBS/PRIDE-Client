import React from 'react';
import MyPRIDE from './MyPRIDE';
import "../PRIDEWall/PRIDEWall.css";
import "../Homepage.css";

export default class MyPRIDEWall extends React.Component{
    render(){
        return(
            <div style={{position: "relative", overflowY: "scroll"}}>
                <div >
                    <MyPRIDE/>
                </div>
            </div>
        )
    }
}
