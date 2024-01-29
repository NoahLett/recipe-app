import AdminSubmissionList from "../components/AdminSubmissionList";

const AdminPage = async () => {

  return (
    <div className="min-h-screen pt-[7rem]">
        <h1 className="text-3xl text-center font-semibold">Admin Dashboard</h1>
        <AdminSubmissionList />
    </div>
  )
}

export default AdminPage;