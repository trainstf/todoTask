import React from 'react';
import Task from '../Task/Task.js';

class ListTask extends React.Component{


    render() {
        return(
            <div>
                {
                    this.props.tasks.map((task)=>
                        <Task {...task} removeTask={()=>{this.props.removeTask(task.id)}}/>
                    )
                }



            </div>
        )
    }
}
export default ListTask;