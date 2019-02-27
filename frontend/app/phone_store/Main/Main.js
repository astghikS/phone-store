import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Phone_list from 'phone_store/Phone_list'
import {flashSuccess} from 'site/actions'
import { NavLink } from 'react-router-dom'
import { ROUTES } from 'routes'
import './main.scss'

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="main">
                    <h1>PHONESTORE.COM</h1>
                    <hr></hr>
                    <div className="row">
                        <NavLink to="/phone/new"><button className="button-primary">ADD</button></NavLink>
                    </div>
                    <h2>PRODUCTS</h2>
                    <Phone_list></Phone_list>
                </div>
            </div>

        )
    }
}

export default connect((state) => ({}), (dispatch) => bindActionCreators({
    flashSuccess
}, dispatch),)(Main)
