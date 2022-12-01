import React, { useState } from 'react';
import ContentList from './ContentList/ContentList';
import Broadcast from "./../../assets/broadcast.svg";
import "./ContentPage.scss";

export interface ContentPageSingleObject {
  title: string;
  description: string;
  date: string;
  views: Number;
  comments: Number;
  likes: Number;
  preview: string;
}

export interface ContentPageProps {
  data: Array<ContentPageSingleObject>;
}

const tabs = [
  {
    title: "Videos",
    component: ContentList
  },
  {
    title: "Music",
    component: ContentList
  },
  {
    title: "Pictures",
    component: ContentList
  }
];

const ContentPage = (props: ContentPageProps) => {
  const { data } = props;
  const [selectTab, setSelectTab] = useState(0);
  return (
    <div className="content">
      <div className="content__wrapper">
        <div className="content__wrapper--title">
          <span>Content</span>
          <img src={Broadcast} alt="Broadcast Icon" />
        </div>

        <div className="content__wrapper--box">
          <div className="tabs">
            <div className="tabs__videos" onClick={() => setSelectTab(0)}>
              Videos
            </div>
            <div className="tabs__music" onClick={() => setSelectTab(1)}>
              Music
            </div>
            <div className="tabs__picture" onClick={() => setSelectTab(2)}>
              Picture
            </div>
          </div>
          {
            tabs[selectTab].title == "Videos" ?
              <ContentList data={data} /> : "Not Yet Created"
          }
        </div>
      </div>
    </div>
  );
};

export default ContentPage;