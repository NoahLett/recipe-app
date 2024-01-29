import getAllSubmissions from "@/lib/getAllSubmissions";
import AdminSubmissionCard from "./AdminSubmissionCard";

const AdminSubmissionList = async () => {

    const submissions = await getAllSubmissions();

  return (
    <div className="mt-3">
        {submissions && submissions.length ? (
            <div className="flex flex-wrap justify-center">
                {
                    submissions.map((submission) => {
                        return (
                            <AdminSubmissionCard 
                              key={submission.id}
                              id={submission.id}
                              name={submission.name}
                              author={submission.author}
                              authorId={submission.authorId}
                              authorVisible={submission.authorVisible}
                              pending={submission.pending}
                              denied={submission.denied}
                              ingredients={submission.ingredients}
                              steps={submission.steps}
                            />
                        )
                    })
                }
            </div>
        ) : (
            <div></div>
        )}
    </div>
  )
}

export default AdminSubmissionList