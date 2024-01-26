import getUserSubmissions from "@/lib/getUserSubmissions";
import UserSubmissionCard from "./UserSubmissionCard";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Image from "next/image";


const UserSubmissionList = async () => {

    const session = await getServerSession(options);
    const submissions = await getUserSubmissions(session?.user?.id);

    if (session) {
        return (
            <div className="p-4 w-full">
                {submissions && submissions.length ? (
                    <div>
                        <h1 className="text-3xl font-semibold">Your Submissions</h1>
                        <div className="flex flex-wrap justify-center">
                            {
                                submissions.map((submission) => {
                                    return (
                                        <UserSubmissionCard 
                                        key={submission.id}
                                        id={submission.id}
                                        name={submission.name}
                                        author={submission.author}
                                        pending={submission.pending}
                                        denied={submission.denied}
                                        ingredients={submission.ingredients}
                                        steps={submission.steps}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-semibold">No Viewable Submissions Here!</h1>
                        <p className="text-xl font-medium">Time to Get Typing!</p>
                        <Image src={'/writing.svg'} height={300} width={1000} priority={true} alt="No Show" />
                    </div>
                )}
            </div>
        )
    }
  return
}

export default UserSubmissionList