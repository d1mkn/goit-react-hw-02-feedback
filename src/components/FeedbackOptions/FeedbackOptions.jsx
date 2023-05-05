import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonsWrap}>
      {options.map(option => {
        return (
          <button
            type="button"
            className={css.feedbackButton}
            key={option}
            option={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option[0].toUpperCase() + option.substr(1)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
