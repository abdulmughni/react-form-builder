import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormListComponent from "../Components/ContentArea/FormBuider/FormCreationBox";

import { getFormsList, getFormsListObject } from "../Store/Action";

const mapStateToProps = (state) => {
  return {
    getFormsListRes: state.formListReducer.getFormsListRes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetFormsList: bindActionCreators(getFormsList, dispatch),
    onGetFormsListObject: bindActionCreators(getFormsListObject, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormListComponent);
