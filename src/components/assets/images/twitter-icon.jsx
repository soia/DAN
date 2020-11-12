import React from 'react';
import PropTypes from 'prop-types';

const TwitterIcon = ({ className }) => (
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
            d="M14.2756 17.2196H3.62972C1.86571 17.2196 0.435974 15.7743 0.435974 13.991V3.22868C0.435974 1.44537 1.86571 0 3.62972 0H14.2756C16.0396 0 17.4693 1.44537 17.4693 3.22868V13.991C17.4693 15.7743 16.0396 17.2196 14.2756 17.2196Z"
            fill="black"
        />
        <path
            opacity="0.6"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3359 6.85675C12.6824 6.60814 12.9735 6.29765 13.2109 5.94034V5.9398C12.8942 6.08025 12.5568 6.17334 12.2049 6.21854C12.5669 6.00007 12.8431 5.65675 12.973 5.24294C12.6355 5.44635 12.2629 5.59003 11.8658 5.67021C11.5454 5.32581 11.0887 5.11218 10.5905 5.11218C9.62383 5.11218 8.84562 5.90536 8.84562 6.87773C8.84562 7.01764 8.85733 7.15217 8.88607 7.28024C7.43451 7.20867 6.15009 6.50536 5.28725 5.43397C5.13661 5.69819 5.04825 6.00061 5.04825 6.32617C5.04825 6.93746 5.35964 7.47934 5.8238 7.79306C5.54328 7.78768 5.26809 7.70535 5.03494 7.57567V7.59504C5.03494 8.45279 5.64016 9.16525 6.4338 9.32938C6.29168 9.36866 6.13679 9.38749 5.97603 9.38749C5.86425 9.38749 5.75141 9.38104 5.64548 9.35736C5.8717 10.0564 6.51365 10.5703 7.27695 10.5869C6.68292 11.0567 5.92866 11.3398 5.11212 11.3398C4.96894 11.3398 4.83161 11.3333 4.69427 11.3156C5.46769 11.8198 6.3843 12.1077 7.37277 12.1077C10.4537 12.1077 12.462 9.50911 12.3359 6.85675V6.85675Z"
            fill="white"
        />
    </svg>
);

TwitterIcon.defaultProps = {
    className: '',
};

TwitterIcon.propTypes = {
    className: PropTypes.string,
};

export default TwitterIcon;
