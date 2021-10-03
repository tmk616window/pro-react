import React, { Component } from "react";
import {TaskList} from './TaskList'

interface TaskItemProps {
    taskItem: string
}


export const TaskItem: React.FC<TaskItemProps> = ({taskItem}) => {
  
    return (
            <li className="list-group-item list-group-item-primary">
                {taskItem}
            </li>
    );
  }

