import React from "react";
import "../styles/TopicListItem.scss";


// Sample Topic Data
// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };


const TopicListItem = (props) => {

  const { topicData, handleTopicSelection } = props;


  return (
    <div className="topic-list__item">

      <span onClick={() => handleTopicSelection(topicData.id)}>{topicData.title}</span>

    </div>
  );

};


export default TopicListItem;
