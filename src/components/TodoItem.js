import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({item, deleteItem,toggleComplete}) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button 
            className="button-delete"
            onClick={()=>deleteItem(item._id)}
            >
              삭제
              </button>

            <button 
            className="button-delete"
            onClick={() => toggleComplete(item._id, item.complete)}
            >
              {item.complete ? "되돌리기" : "끝남"}
              </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
