import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {flashSuccess} from 'site/actions'
import './phone_list.scss'
import phonesList from './phones_list.json'

class Phone_list extends React.Component {
    componentWillMount() {
        if (window.location.search.indexOf('welcome') > 0) {
            this
                .props
                .flashSuccess('Welcome!')
        }
    }

    render() {
        let phonsListBlock_cols = '';

        if (phonesList.length > 0) {
            phonsListBlock_cols = phonesList.map(obj => {
                return (
                    <div key={obj.age} className="four cols">
                        <img src={"http://localhost:5000/static/" + obj.imageUrl} alt="Phone"></img>
                        <h3>{obj.name}</h3>
                    </div>
                )
            })
        }
        let phonsListBlock_rows = []
        const size = 3;
        while (phonsListBlock_cols.length > 0) {
            phonsListBlock_rows.push(phonsListBlock_cols.splice(0, size));
        }
        phonsListBlock_rows = phonsListBlock_rows.map((obj, i) => {
            return (
                <div key={i} className="row">
                    {obj}
                </div>
            )
        })
        return (
            <div>
                <div className="main">
                    {phonsListBlock_rows}
                </div>
            </div>

        )
    }
}

export default connect((state) => ({}), (dispatch) => bindActionCreators({
    flashSuccess
}, dispatch),)(Phone_list)
