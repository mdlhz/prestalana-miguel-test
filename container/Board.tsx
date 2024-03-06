import React from 'react';
import {
    ContainerBox,
  } from "@/components/sharedstyles";
import {DndContext, useDroppable} from "@dnd-kit/core";
import {LaneBox} from "../components/sharedstyles";
import Lane from "../components/Lane";


const Board = ({ lanes, tasks }) => {
  // console.log('board component')
  //   console.log(lanes);
  //   console.log('-----------');
  //   console.log(tasks);
  // lanes.map(lane => console.log(lane.id));
  // lanes.map(lane => console.log(lane.day));
    function Droppable(props) {
        const {setNodeRef} = useDroppable({
            id: props.id,
        });

        return (
            <div ref={setNodeRef}>
                {props.children}
            </div>
        );
    }

    return (
      <DndContext>
          <ContainerBox>
              {lanes.map(lane => (
                  <LaneBox key={lane.id + 100}>
                      <Lane
                          key={lane.id}
                          laneId={lane.id}
                          title={lane.title}
                          tasks={tasks}
                      />
                  </LaneBox>
              ))}
          </ContainerBox>
      </DndContext>

  );
}

export default Board;
