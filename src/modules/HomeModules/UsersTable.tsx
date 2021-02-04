import { useGetAllUsers } from "../../queries/useGetUsers";

function UsersTable() {
  const { data: usersData, isSuccess, isLoading } = useGetAllUsers();

  const hasUserData = isSuccess && usersData?.length != 0;
  const noUserData = isSuccess && usersData?.length === 0;

  return (
    <>
      {isLoading && <p>Loading....</p>}
      {hasUserData && <h1>DB has user data</h1>}

      {noUserData && <h1>No user records</h1>}
    </>
  );
}

export default UsersTable;
