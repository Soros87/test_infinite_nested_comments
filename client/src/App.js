import "./styles.css";
import { useState } from "react";
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";
// import { comments } from "./assets/dummyData";
const comments = {
  id: 1,
  items: [],
};
function App() {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = () => {
    //TODO
  };

  const handleEditNode = () => {
    //TODO
  };

  const handleDeleteNode = () => {
    //TODO
  };

  return (
    <div className="App">
      <Comment
        comment={commentsData}
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
}

export default App;
