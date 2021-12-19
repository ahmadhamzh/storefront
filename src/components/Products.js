import React from 'react'
import { connect } from 'react-redux';
 function Products(props) {
     console.log(props);
    return (
        <div>
            <h1>hello {props.categories}</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.Active
  });




export default connect(mapStateToProps)(Products);