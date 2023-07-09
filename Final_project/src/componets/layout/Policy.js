import * as React from 'react';
import { Link } from "react-router-dom";


const Privacy = () => {

    const PrivacyPageNav = {
        title_page: 'Privacy Policy',
        link_home: 'Home',
    };

    const PrivacyPageText = {
        section_first: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
        section_second_start: 'Many desktop publishing packages and ',
        section_second_link: 'web page',
        section_second_end: 'editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        section_third: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    };

    const PrivacyPageOneList = {
        first_level: '1. Determination of personal information of users',
        second_level: '1.1 If you are going to use a passage of Lorem Ipsum: ',
        third_level_item_one: '1.1.1 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
        third_level_item_two: '1.1.2 It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        first_level_item_two: '1.2 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
        first_level_item_three: '1.3 Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    };

    const PrivacyPageTwoList = {
        first_level: '2. Reasons for collecting and processing user personal information',
        second_level_item_one: '2.1 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. ',
        second_level_item_two: '2.2 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet: ',
        third_level_item_one: '2.2.1 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged;',
        third_level_item_two: '2.2.2 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages;',
        third_level_item_three: '2.2.3 Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like);',
        third_level_item_four: '2.2.4 Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text;',
    };

    return (
        <div className="wrapper_policy">
            < div className="policy_top">
                <div className='policy_top_content container'>
                    <h1>{PrivacyPageNav.title_page}</h1>
                    <div className='navigation_policy'>
                        <Link to={"/"}>
                            <span className='link_home'>{PrivacyPageNav.link_home}</span>
                        </Link>
                        <span >{PrivacyPageNav.title_page}</span>
                    </div>
                </div>
            </div>
            <div className='policy_bottom_bg'>
                <div className='container'>
                    <div className='policy_bottom'>
                        <div>{PrivacyPageText.section_first}</div>
                        <div >{PrivacyPageText.section_second_start} <Link to={"/"}>{PrivacyPageText.section_second_link} </Link>{PrivacyPageText.section_second_end}</div>
                        <div>{PrivacyPageText.section_third}</div>
                        <div>{PrivacyPageOneList.first_level}</div>
                        <div className='second_level'>{PrivacyPageOneList.second_level}</div>
                        <div className='third_level'>{PrivacyPageOneList.third_level_item_one} </div>
                        <div className='third_level'>{PrivacyPageOneList.third_level_item_two}</div>
                        <div className='second_level'>{PrivacyPageOneList.first_level_item_two}</div>
                        <div className='second_level'>{PrivacyPageOneList.first_level_item_three}</div>
                        <div >{PrivacyPageTwoList.first_level}</div>
                        <div className='second_level'>{PrivacyPageTwoList.second_level_item_one}</div>
                        <div className='second_level'>{PrivacyPageTwoList.second_level_item_two}</div>
                        <div className='third_level'>{PrivacyPageTwoList.third_level_item_one}</div>
                        <div className='third_level'>{PrivacyPageTwoList.third_level_item_two}</div>
                        <div className='third_level'>{PrivacyPageTwoList.third_level_item_three}</div>
                        <div className='third_level'>{PrivacyPageTwoList.third_level_item_four}</div>

                    </div>
                </div>
            </div>
        </div >
    )
};

export default Privacy;
