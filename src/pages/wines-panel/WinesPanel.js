import React from 'react';
import NewWineForm from '../../components/new-wine-form/NewWineForm';
import './wines-panel.styles.scss'

class WinesPanel extends React.Component {
  render() {
    return (
      <div>
      <NewWineForm />
      </div>
    )
  }
}

export default WinesPanel
