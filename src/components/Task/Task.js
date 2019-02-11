import React from 'react';

const Task = ({id, title = "title", text="text", author="qwe", status="qwre", date_start="01.01.2019", date_end="01.01.2019", importance="qwe",removeTask}) =>{
        return (
            <div>
                <li>title: {title}</li>
                <li>text: {text}</li>
                <li>author: {author}</li>
                <li>status: {status}</li>
                <li>date_start: {date_start}</li>
                <li>date_end: {date_end}</li>
                <li>importance: {importance}</li>
                <button id="deleteTask" onClick={() => removeTask(id)}>Удалить задачу</button>
            </div>
        );
}

export default Task;