import React from 'react';
import PropTypes from 'prop-types';

function SelectInput(props) {
  let wrapperClass = 'form-group';
  if (props.error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          className="form-control"
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value || ''}
        >
          <option value="" />
          {props.options.map(option => (
            <option value={option.id}>{option.name}</option>
          ))}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  error: '',
  options: [],
};

export default SelectInput;
