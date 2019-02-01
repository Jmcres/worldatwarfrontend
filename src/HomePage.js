import React, {Component} from 'react'
import TankCollection from './TankCollection'
import UserArmory from './UserArmory'


export default class HomePage extends Component {
    render(){
        return(
        <div>
            <TankCollection />
            <UserArmory />
        </div>)
    }
}
