import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const GameOVer = () => {
  return (
    <div>
      game over
    </div>
  );
}

export default compose(
  firestoreConnect([{collection : 'client'}]),
  connect((state, props)=>({
      client : state.firestore.ordered.client
  }))
)(GameOVer)
