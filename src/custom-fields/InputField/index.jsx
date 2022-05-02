import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";

const InputField = (props) => {
  const { field, type, label, placeholder, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  return (
    <FormGroup>
      <Label id="titelId">Titel</Label>
      <Input {...field} type={type} disabled={disabled} id={name} placeholder={placeholder} />
    </FormGroup>
  );
};
InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

export default InputField;
