import React from "react";
import "../styles/TopicListItem.scss";


// Sample Topic Data
// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };


const TopicListItem = (props) => {

  const key = props.key;
  const topicData = props.topicData;


  return (
    <div className="topic-list__item">

      <p>{topicData.title}</p>

    </div>
  );

};


export default TopicListItem;
