import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { flashSuccess } from 'site/actions'
import './phone_list.scss'
import phonesList from './phones_list.json'




class Phone_list extends React.Component {
    constructor() {
        super();
        this.state = {
            phonesList: []
        };
    }

    componentWillMount() {
        if (window.location.search.indexOf('welcome') > 0) {
            this.props.flashSuccess('Welcome!')
        }
    }

    render() {
        let phonsListBlock = '';
 
        if(phonesList.length > 0) {
            phonsListBlock = phonesList.map( obj => {
                return (
                    <div key={obj.age} className="three cols">
                        <div className="content">
                            <img src={obj.imageUrl} alt="Phone"></img>
                            <h3>{obj.name}</h3>
                        </div>
                    </div>
                )
 	        })
        }
        return (
        <div>
            <div className="main">
                <div className="row">
                    {phonsListBlock}
                </div>    
            </div>
        </div>

        )
    }
}

export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({ flashSuccess }, dispatch),
)(Phone_list)

