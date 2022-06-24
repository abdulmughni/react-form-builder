import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormComponent from "../Components/ContentArea/FormBuider";

import { getFormsList } from "../Store/Action";

const mapStateToProps = (state) => {
  return {
    getFormsListRes: state.formListReducer.getFormsListRes,
    getFormsListObjectRes: state.formListReducer.getFormsListObjectRes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetFormsList: bindActionCreators(getFormsList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
