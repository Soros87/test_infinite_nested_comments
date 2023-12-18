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

  const handleInsertNode = (folderId, item) => {
    const result = insertNode(commentsData, folderId, item);
    setCommentsData(result);
  };

  const handleEditNode = (folderId, value) => {
    //TODO
    const result = editNode(commentsData, folderId, value);
    setCommentsData(result);
  };

  const handleDeleteNode = (folderId) => {
    //TODO
    const result = deleteNode(commentsData, folderId);
    const temp = { ...result };
    //If it mutates the original object, creating a copy ensures data integrity.
    //If it returns a new modified copy, creating a copy might be redundant.
    //deleteNode indeed mutates the orignial object hence need to create a copy
    setCommentsData(temp);
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
