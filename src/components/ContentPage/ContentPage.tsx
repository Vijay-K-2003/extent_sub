import React from 'react';
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

const ContentPage = (props: ContentPageProps) => {
  const { data } = props;
  return (
    <div className="content">
      <div className="content__wrapper">
        <div className="content__wrapper--title">
          <span>Content</span>
          <img src={Broadcast} alt="Broadcast Icon" />
        </div>

        <div className="content__wrapper--box">
          <ContentList data={data} />
        </div>
      </div>
    </div>
  );
};

export default ContentPage;