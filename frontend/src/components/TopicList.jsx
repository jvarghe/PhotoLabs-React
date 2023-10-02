import React from "react";

import topics from "mocks/topics";
import "../styles/TopicList.scss";

import TopicListItem from "./TopicListItem";


// Sample Topic Data
//
// const sampleDataForTopicList = [
//   {
//     id: "1",
//     slug: "topic-1",
//     title: "Nature",
//   },
//   {
//     id: "2",
//     slug: "topic-2",
//     title: "Travel",
//   },
//   {
//     id: "3",
//     slug: "topic-3",
//     title: "People",
//   },
// ];


const TopicList = () => {

  return (

    <div className="top-nav-bar__topic-list">

      {topics.map((topicData) => (

        <TopicListItem

          key={topicData.id}
          topicData={topicData}

        />

      ))}

    </div>

  );

};

export default TopicList;
