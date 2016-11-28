import {connect} from 'react-redux';
import {setFormStatus, setFormFields} from '../actions';
import App from '../components/App';

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => {
      dispatch(setFormStatus("addForm")),
      dispatch(setFormFields(-1, "", "", "" ));
    }
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;