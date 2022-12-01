import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { ContentPageProps } from '../ContentPage';

const ContentList = (props: ContentPageProps) => {
    const { data } = props;

    const renderThumb = () => {
        const thumbStyle = {
          borderRadius: 6,
          backgroundColor: '#5C5C5C'
        };
        return <div style={{...thumbStyle }} />;
      };

    return (
        <div className="content-list">
            <div className="content-list__wrapper">
                <Scrollbars renderThumbVertical={renderThumb} className='scroll' style={{ height: "40vh", backgroundColor: 'black' }} >
                    {
                        data.map((d, idx) => {
                            return (
                                <div className="content-list__wrapper--item">
                                    {/* <div className="content-list__wrapper__item--icon">
                                    <img src={d.icon} alt={d.title} />
                                </div> */}
                                    <div className="content-list__wrapper__item--title">
                                        {d.title} | {d.description}
                                    </div>
                                    <div className="content-list__wrapper__item--data">
                                        {d.date}
                                    </div>
                                    <div className="content-list__wrapper__item--views">
                                        {`${d.views}`}
                                    </div>
                                    <div className="content-list__wrapper__item--comments">
                                        {`${d.comments}`}
                                    </div>
                                    <div className="content-list__wrapper__item--likes">
                                        {`${d.likes}`}
                                    </div>
                                    <div className="content-list__wrapper__item--preview">
                                        <a href={d.preview}>Preview</a>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Scrollbars>
            </div>
        </div>
    );
};

export default ContentList;