import React from "react";
import PropTypes from "prop-types";
import { parseStringArrayToIntArray } from "../../helper/MultiDropDownHelper";

function MultiDropDown(props) {
    let wrapperClass = "form-group";

    if (props.error && props.error.length > 0) {
        wrapperClass += " has-error";
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <select multiple
                    id={props.id}
                    name={props.name}
                    onChange={props.onChange}
                    className="form-control">
                    {props.options
                        && props.options.map(_option => {
                            let _values = [];
                            if (props.values) {
                                _values = parseStringArrayToIntArray(props.values);
                            }
                            return (
                                _values.includes(_option.id)) ? (
                                    <option key={_option.id} value={_option.id} selected>{_option.email}</option>
                                ) : (
                                    <option key={_option.id} value={_option.id}>{_option.email}</option>
                                );
                        })
                    }
                </select>
            </div>
            {props.error && props.error.length > 0 && (
                <div className="alert alert-danger">{props.error}</div>
            )}
        </div>
    );
}

MultiDropDown.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    values: PropTypes.array,
    error: PropTypes.string
};

MultiDropDown.defaultProp = {
    values: [],
    error: ""
};

export default MultiDropDown;
