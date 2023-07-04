import React from "react";

interface Props {
    id: string;
}

export const HeaderSvgFavourites = ({ id }: Props) => {
    switch (id) {
        case 'heart':
            return (
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 30 30" space="preserve">
                    <g>
                        <path className="st11" d="M15,8.7l-1.6-1.7c-2.3-2.5-6.2-2.6-8.7-0.2l0,0c-2.2,2.2-2.3,5.7-0.2,8L7,17.3l8,8.7l8-8.7l1-1.1l-8.3-8.3
		L15,8.7z" fill='#ff55a5' />
                    </g>
                    <path className="st12" d="M25.3,6.7L25.3,6.7c-2.4-2.4-6.4-2.2-8.7,0.2l-0.9,1l8.3,8.3l1.4-1.5C27.6,12.4,27.5,8.9,25.3,6.7z" fill='#ff5860' />
                </svg>
            );
        default:
            return <svg></svg>;
    }
};
