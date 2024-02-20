import AdminSubmissionList from "../components/AdminSubmissionList";
import BackButton from "../components/BackButton";

const AdminPage = async () => {

  return (
    <div className="min-h-screen pt-20 px-2">
        <BackButton />
        <h1 className="mt-3 text-3xl text-center font-semibold">Admin Dashboard</h1>
        <AdminSubmissionList />
    </div>
  )
}

export default AdminPage;