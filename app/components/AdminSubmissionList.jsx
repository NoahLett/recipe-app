import getAllSubmissions from "@/lib/getAllSubmissions";
import AdminSubmissionCard from "./AdminSubmissionCard";
import Image from "next/image";

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
            <div className="flex flex-col items-center">
                <h2 className="text-xl font-medium">No New Submissions</h2>
                <Image src={'/yoga.svg'} height={500} width={800} alt="yoga" />
            </div>
        )}
    </div>
  )
}

export default AdminSubmissionList