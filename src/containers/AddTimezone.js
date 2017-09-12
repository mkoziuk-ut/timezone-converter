import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Select from 'react-select'; // eslint-disable-line import/no-unresolved,import/extensions
import moment from 'moment-timezone';
import { addTimezone } from '../actions';
import timezoneUtils from '../utils/timezone';
import Button from '../components/Button';
import styles from './AddTimezone.css';

class AddTimezone extends React.Component {
  constructor(props) {
    super(props);

    this.setSelectValue = this.setSelectValue.bind(this);
    this.addSelectedTimezone = this.addSelectedTimezone.bind(this);

    this.state = {
      selectValue: null,
    };
  }

  setSelectValue(e) {
    this.setState({
      selectValue: e ? e.value : null,
    });
  }

  addSelectedTimezone() {
    const timezoneObj = timezoneUtils.getTimezoneInfo(this.state.selectValue);
    this.props.dispatch(addTimezone(timezoneObj));
    this.setSelectValue(null);
    this.props.history.push('/');
  }

  render() {
    const options = moment.tz.names().map((tz) => ({
      value: tz,
      label: tz.replace('_', ' '),
    }));

    return (
      <div className={styles.container}>
        <div className={styles.centeredBox}>
          <p>Select the timezone to add to your dashboard</p>
          <Select
            name="form-field-name"
            options={options}
            value={this.state.selectValue}
            onChange={this.setSelectValue}
            placeholder={'Type or select timezone name'}
            autofocus
          />
          <div className={'mt3 center'}>
            <Button
              label="Add selected timezone"
              clickHandler={this.addSelectedTimezone}
            />
          </div>
        </div>
      </div>
    );
  }
}

AddTimezone.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(withRouter(AddTimezone));
