import React from 'react';

require('assets/icons/money.svg')
require('assets/icons/label.svg');
require('assets/icons/statistics.svg');

type Props = {
    name: string;
}

const Icon = (props: Props) => {
    return (
        <svg className="icon">
          <use xlinkHref={'#' + props.name}></use>
        </svg>
    );
};

export default Icon;
