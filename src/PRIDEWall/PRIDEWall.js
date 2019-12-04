import React from 'react';
import Achievements from './Achievements';
import ShowAllThisMonth from './showAll';

export default class PRIDEWall extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <ShowAllThisMonth/>
                </div>
                <div>
                    <Achievements/>
                </div>
            </div>
        )
    }
}