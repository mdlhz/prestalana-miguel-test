import Link from "next/link";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import { AuthWrapper } from "@/components/authWrapper";

export default function About() {
  return (
    <AuthWrapper>
      <Container>
        <Main>
          <Title>About Page</Title>
          <Description>
            <Link href="/">&larr; Go Back</Link>
          </Description>
        </Main>
      </Container>
    </AuthWrapper>
    
  );
}
