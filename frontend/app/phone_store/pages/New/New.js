import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {flashSuccess} from 'site/actions'

class New extends React.Component {
    render() {
        return (
            <div>
                <div className="main">
                    <h1>Hello New</h1>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({}), (dispatch) => bindActionCreators({
    flashSuccess
}, dispatch),)(New)
