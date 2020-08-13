import React from 'react';

require('assets/icons/money.svg')
require('assets/icons/label.svg');
require('assets/icons/statistics.svg');
//直接引入/assets/icons目录下的所有svg图片，
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}

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
