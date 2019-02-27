import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Phone_list from 'phone_store/Phone_list'
import {flashSuccess} from 'site/actions'
import './main.scss'

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="main">
                    <h1>PHONESTORE.COM</h1>
                    <hr></hr>
                    <div className="row">
                        <a href="#" className="button button-primary">Anchor Link Button</a>
                        <button className="button-primary">Button Element</button>
                        <input type="submit" className="button-primary" value="Submit Input"/>
                        <input type="button" className="button-primary" value="Button Input"/>
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
