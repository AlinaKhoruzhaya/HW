import React from "react";

interface Props {
    id: string;
}

export const HeaderSvgSearch = ({ id }: Props) => {
    switch (id) {
        case 'search':
            return (
                <svg id="sea" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2508 8.23841C16.2508 10.0012 15.6687 11.6296 14.6882 12.9508L19.6338 17.8168C20.1221 18.2969 20.1221 19.0765 19.6338 19.5566C19.1455 20.0367 18.3525 20.0367 17.8642 19.5566L12.9186 14.6906C11.5748 15.6584 9.91845 16.2268 8.1254 16.2268C3.6369 16.2268 0 12.6512 0 8.23841C0 3.82558 3.6369 0.25 8.1254 0.25C12.6139 0.25 16.2508 3.82558 16.2508 8.23841ZM8.1254 13.7689C8.86412 13.7689 9.59561 13.6258 10.2781 13.3479C10.9606 13.0699 11.5807 12.6626 12.1031 12.149C12.6254 11.6355 13.0398 11.0258 13.3225 10.3548C13.6052 9.68384 13.7507 8.96468 13.7507 8.23841C13.7507 7.51215 13.6052 6.79299 13.3225 6.12201C13.0398 5.45102 12.6254 4.84135 12.1031 4.3278C11.5807 3.81425 10.9606 3.40688 10.2781 3.12895C9.59561 2.85102 8.86412 2.70797 8.1254 2.70797C7.38668 2.70797 6.65519 2.85102 5.9727 3.12895C5.29021 3.40688 4.67008 3.81425 4.14773 4.3278C3.62537 4.84135 3.21102 5.45102 2.92832 6.12201C2.64562 6.79299 2.50012 7.51215 2.50012 8.23841C2.50012 8.96468 2.64562 9.68384 2.92832 10.3548C3.21102 11.0258 3.62537 11.6355 4.14773 12.149C4.67008 12.6626 5.29021 13.0699 5.9727 13.3479C6.65519 13.6258 7.38668 13.7689 8.1254 13.7689Z" fill="#F6F6F5" />
                </svg>
            );
        default:
            return <svg></svg>;
    }
};
