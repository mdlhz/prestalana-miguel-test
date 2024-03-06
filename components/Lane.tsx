import React, {useState} from 'react';
import {
    Container,
    Title,
    LaneBox,

  } from "@/components/sharedstyles";
import Task from './Task';
import { useDroppable } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";



const Lane = (props) => {
  const [hasBeenMade, setHasBeenMade] = useState(false);
  const { id, tasks, laneId } = props;

  const laneTasks = tasks.filter( task => task.task.laneid === laneId);
  const { setNodeRef } = useDroppable({
      id
  });

  function markComplete(taskId) {
    setHasBeenMade(true);
  }

  return (
      <SortableContext
          id={id}
          items={tasks}
          strategy={verticalListSortingStrategy}
      >
          <Container ref={setNodeRef}>
              {laneTasks.map(task => {
                  // if ( id.includes(task.id) && hasBeenMade) {
                  //     let bg = 'teal'
                  // }
                  return(
                      <Task key={task.id} id={task.id} task={task} markComplete={markComplete} />
                  )
              })}
          </Container>
      </SortableContext>
    // <LaneBox>
    //   <Title>{title}</Title>
    //
    // </LaneBox>
  )
}
export default Lane;
