import React from "react";

interface Props {
    id: string;
}

export const IconFacebook = ({ id }: Props) => {
    switch (id) {
        case 'facebook':
            return (
                <svg fill="#c7c7c7" height="20px" width="20px" version="1.1" id="facebook" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24" space="preserve">
                    <g id="social-facebook">
                        <path id="facebook" d="M13,23V13h3.4l0.5-4H13V6.6c0-1.1,0.3-1.9,1.9-1.9H17V1.2c-0.4,0-1.6-0.2-3-0.2c-3,0-5,1.8-5,5.2V9H5.6v4H9v10
		C9,23,13,23,13,23z" fill="fff" />
                    </g>
                </svg>
            );
        default:
            return <svg></svg>;
    }
};
