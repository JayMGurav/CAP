import useAuth from "@/hooks/useAuth";
import { useQuery, gql } from '@apollo/client';
import { Heading } from "@chakra-ui/layout";

import DashboardShell from "@/components/DashboardShell";

const USERS = gql`
  query GetUsers {
    users{
      id
      fullname
    }
  }
`;



export default function Home() {
  // const { user, loading } = useAuth();;
  const { loading:dataLoading, error, data } = useQuery(USERS);

  // // console.log({user,loading});
  // console.log({data,error, dataLoading});
  
  return (
    <DashboardShell>
      <Heading>Home</Heading>
    </DashboardShell>
  );
}
    // <>
    //   <Heading as="h1">Dashboard</Heading>
    //   {loading || dataLoading ? "Loading..." : user.email}

    // </>