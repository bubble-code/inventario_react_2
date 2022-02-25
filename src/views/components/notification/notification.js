import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './notification.css';

const Notification = () => {
  return (
    <div className="notification">
      <p className="notification__message" ref={c => this.message = c}>{this.props.message}</p>
      <button
        className="btn notification__button"
        onClick={this.props.action}
        ref={c => this.button = c}
        type="button">{this.props.actionLabel}</button>
    </div>
  )
}



export default Notification;
