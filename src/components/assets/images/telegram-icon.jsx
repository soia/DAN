import React from 'react';
import PropTypes from 'prop-types';

const TelegramIcon = ({ className }) => (
    <svg
        className={className}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            opacity="0.102748"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5585 17.2196H3.91268C2.14867 17.2196 0.718933 15.7743 0.718933 13.991V3.22868C0.718933 1.44537 2.14867 0 3.91268 0H14.5585C16.3225 0 17.7523 1.44537 17.7523 3.22868V13.991C17.7523 15.7743 16.3225 17.2196 14.5585 17.2196Z"
            fill="black"
        />
        <path
            opacity="0.6"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.23563 12.9147C11.5878 12.9147 13.494 10.9878 13.494 8.60984C13.494 6.23192 11.5878 4.30493 9.23563 4.30493C6.88343 4.30493 4.97729 6.23192 4.97729 8.60984C4.97729 10.9878 6.88343 12.9147 9.23563 12.9147ZM6.92546 8.51679L11.031 6.91644C11.2216 6.84702 11.3882 6.96325 11.3265 7.25491L11.327 7.25437L10.6281 10.5837C10.5765 10.8194 10.4375 10.877 10.2432 10.7661L9.17865 9.97292L8.66499 10.4728C8.60804 10.5304 8.56013 10.5788 8.45048 10.5788L8.52606 9.48324L10.4993 7.6811C10.585 7.60469 10.4801 7.56164 10.3673 7.63751L7.92883 9.18943L6.87809 8.85795C6.6492 8.78531 6.64441 8.62764 6.92546 8.51679V8.51679Z"
            fill="white"
        />
    </svg>
);

TelegramIcon.defaultProps = {
    className: '',
};

TelegramIcon.propTypes = {
    className: PropTypes.string,
};

export default TelegramIcon;
