import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { Button } from 'reactstrap'

// import { PageContent } from 'components'
import Phone_list from 'phone_store/Phone_list'
import { flashSuccess } from 'site/actions'
import './main.scss'


class Main extends React.Component {
  // componentWillMount() {
  //   if (window.location.search.indexOf('welcome') > 0) {
  //     this.props.flashSuccess('Welcome!')
  //   }
  // }

  render() {
    return (
      <div>
        <div className="main">
          <h1>PHONESTORE.COM</h1>
          <hr></hr>
          <h2>PRODUCTS</h2>
          <Phone_list></Phone_list>             
        </div>
      </div>

    )
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({ flashSuccess }, dispatch),
)(Main)
