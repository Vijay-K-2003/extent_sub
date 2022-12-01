import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { ContentPageProps } from '../ContentPage';
import "./ContentList.scss"

const ContentList = (props: ContentPageProps) => {
    const { data } = props;

    const renderThumb = () => {
        const thumbStyle = {
            borderRadius: 6,
            backgroundColor: '#5C5C5C'
        };
        return <div style={{ ...thumbStyle }} />;
    };

    return (
        <div className="content-list">
            <div className="content-list__wrapper">

                <Scrollbars renderThumbVertical={renderThumb} className='scroll' style={{ height: "40vh", backgroundColor: 'black' }} >
                    <div className="content-list__wrapper--item">
                        <table>

                            {
                                data.map((d, idx) => {
                                    return (
                                        <div>
                                        <tr key={idx} className="data-row">
                                            <td>
                                                <div className="content-list__wrapper__item--icon">
                                                    <img width={"40px"} height={"40px"} src={d.icon} alt="icon" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="content-list__wrapper__item--title">
                                                    {d.title}<span>{d.description}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="content-list__wrapper__item--data">
                                                    {d.date}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="content-list__wrapper__item--views">
                                                    {`${d.views}`}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="content-list__wrapper__item--comments">
                                                    {`${d.comments}`}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="content-list__wrapper__item--likes">
                                                    {`${d.likes}`}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="content-list__wrapper__item--preview">
                                                    <a href={d.preview}>Preview</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <div className="divider"></div>
                                        </div>
                                    );
                                })
                            }
                        </table>
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
};

export default ContentList;