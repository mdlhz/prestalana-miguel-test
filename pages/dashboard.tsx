import Link from "next/link";
import { Container, Main, Title, Description, Grid, NavBar } from "@/components/sharedstyles";
import { AuthWrapper } from "@/components/authWrapper";
import Board from "@/container/Board";

export default function Dashboard() {
  const lanes = [
    {
      "id": 1,
      "title": "To Do"
    },
    {
      "id": 2,
      "title": "In Progress"
    },
    {
      "id": 3,
      "title": "Done"
    },    
  ];

  const tasks = [
    {
      "id": 1,
      "task": {
        "title": "Buy Milk",
        "laneid": 1,
        "done": 0
      }
    },
    {
      "id": 2,
      "task": {
        "title": "Get Coffee",
        "laneid": 2,
        "done": 0
      }
    },
    {
      "id": 3,
      "task": {
        "title": "Watering plants",
        "laneid": 3,
        "done": 0
      }
    },    
  ];

  console.log("dashboard");
  return (
    <>
      <Grid>
        <NavBar>MENU</NavBar>
        <Board lanes={lanes} tasks={tasks}/>
        {/* <Main>
          <Title>About Page</Title>
          <Description>
            <Link href="/">&larr; Go Back</Link>
          </Description>
        </Main> */}
      </Grid>
    </>
    
  );
}
