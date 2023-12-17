import React, { useEffect, useRef, useState } from "react";
import Action from "./Action";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";

const Comment = ({
  comment,
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);
  const inputRef = useRef(null);

  const handleNewComment = () => {
    //TODO
  };

  useEffect(() => {
    //TODO
  });

  const onAddComment = () => {
    //TODO
  };

  const handleDelete = () => {
    //TODO
  };
  return (
    <div>
      <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          <>
            <input
              type="text"
              className="inputContainer__input first_input "
              autoFocus
              value={
                {
                  /*TODO*/
                }
              }
              onChange={(e) => {
                /*TODO*/
              }}
              placeholder="type..."
            />

            <Action
              className="reply comment"
              type="Comment"
              handleClick={
                {
                  /*TODO*/
                }
              }
            />
          </>
        ) : (
          <>
            <span
              contentEditable={
                {
                  /*TODO*/
                }
              }
              suppressContentEditableWarning={
                {
                  /*TODO*/
                }
              }
              style={{ wordWrap: "break-word" }}
              ref={
                {
                  /*TODO*/
                }
              }
            >
              {
                {
                  /*TODO*/
                }
              }
            </span>
            <div style={{ display: "flex", marginTop: "5px" }}>
              {{
                /*TODO*/
              } ? (
                <>
                  <Action
                    className="reply"
                    type="SAVE"
                    handleClick={
                      {
                        /*TODO*/
                      }
                    }
                  />
                  <Action
                    className="reply"
                    type="CANCEL"
                    handleClick={() => {
                      {
                        /*TODO*/
                      }
                    }}
                  />
                </>
              ) : (
                <>
                  <Action
                    className="reply"
                    type={
                      <>
                        {{
                          /*TODO*/
                        } ? (
                          <UpArrow width="10px" height="10px" />
                        ) : (
                          <DownArrow width="10px" height="10px" />
                        )}{" "}
                        REPLY
                      </>
                    }
                    handleClick={
                      {
                        /*TODO*/
                      }
                    }
                  />
                  <Action
                    className="reply"
                    type="EDIT"
                    handleClick={() => {
                      /*TODO*/
                    }}
                  />
                  <Action
                    className="reply"
                    type="DELETE"
                    handleClick={
                      {
                        /*TODO*/
                      }
                    }
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div
        style={{
          display: {
            /*TODO*/
          }
            ? "block"
            : "none",
          paddingLeft: 25,
        }}
      >
        {{
          /*TODO*/
        } && (
          <div className="inputContainer">
            <input
              type="text"
              className="inputContainer__input"
              autoFocus
              onChange={(e) => {
                /*TODO*/
              }}
            />
            <Action
              className="reply"
              type="REPLY"
              handleClick={
                {
                  /*TODO*/
                }
              }
            />
            <Action
              className="reply"
              type="CANCEL"
              handleClick={() => {
                /*TODO*/
              }}
            />
          </div>
        )}
        {comment?.items?.map((cmnt) => {
          return (
            <Comment
              key={cmnt.id}
              comment={cmnt}
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
