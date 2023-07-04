import React from "react";

interface Props {
    id: string;
}

export const IconTwitter = ({ id }: Props) => {
    switch (id) {
        case 'twitter':
            return (
                <svg fill="#c7c7c7" height="20px" width="20px" version="1.1" id="XMLID_6_" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24" space="preserve">
                    <g id="social-twitter">
                        <path d="M24,4.5c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6
		c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.8,8,4.2,6,1.8,3.1C1.4,3.8,1.1,4.7,1.1,5.6c0,1.7,0.9,3.2,2.2,4.1
		c-0.8,0-1.6-0.2-2.2-0.6c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1
		c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14
		c0-0.2,0-0.4,0-0.6C22.5,6.3,23.3,5.4,24,4.5z"/>
                    </g>
                </svg>
            );
        default:
            return <svg></svg>;
    }
};
