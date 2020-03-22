import React from "react";
import PropTypes from "prop-types";

class TodaysPlan extends React.Component {
    render() {
        const {
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue
        } = this.props;

        return(
            <div className="message-container">
                <span>boolValue: {boolValue}</span>
                <span>numValue: {numValue}</span>
                <span>arrayValue: {arrayValue}</span>
                <span>objValue: {String(objValue)}</span>
                <span>nodeValue: {nodeValue}</span>
                <span>funcValue: {funcValue}</span>
            </div>
        );
    }
}

// 자료형을 선언하는 예제
TodaysPlan.propTypes = {
    boolValue: PropTypes.bool,
    numValue: PropTypes.number,
    arrayValue: PropTypes.arrayOf(PropTypes.number),
    objValue: PropTypes.object,
    nodeValue: PropTypes.node,
    funcValue: PropTypes.func,
};

export default TodaysPlan;