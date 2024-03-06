import {
    CardBox,
Container,
Description,
} from "@/components/sharedstyles";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function Item(props) {
    const { id, task } = props;

    const style = {
        width: "100%",
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        margin: "10px 0",
        background: "white"
    };
    console.log('task');
    console.log(props);
    return (
        <div style={style}>
            {id}
            {/*<Description>{task.task.title}</Description>*/}
            <Description>task</Description>
        </div>
    );
}


const Task = (props) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.id });


return (
    <CardBox ref={setNodeRef} {...attributes} {...listeners}>
        <Item id={props.id} task={props.task} />
    </CardBox>
);
}

export default Task;
