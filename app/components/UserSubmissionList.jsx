import getUserSubmissions from "@/lib/getUserSubmissions";
import UserSubmissionCard from "./UserSubmissionCard";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Image from "next/image";
import Link from "next/link";


const UserSubmissionList = async () => {

    const session = await getServerSession(options);
    const submissions = await getUserSubmissions(session?.user?.id);

    const imageUrl = '/share-recipe.jpg';

    const backgroundDiv = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        width: '100%',
    }

    if (session) {
        return (
            <div className="p-4 w-full">
                {submissions && submissions.length ? (
                    <div>
                        <h1 className="text-3xl text-center font-semibold my-2">Your Submissions</h1>
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
                        <h1 className="text-3xl font-semibold">Got a Favorite Recipe?</h1>
                        <div className="bg-white shadow-md mt-4 rounded-md flex flex-col items-center justify-center">
                            <Image src={'/on-phone.svg'} height={300} width={500} priority={true} alt="No Show" />
                            <Link href={'/add-recipe'} className="text-xl font-medium border-[1px] border-white bg-[#8ce5e5] hover:bg-[#58adae] transition-all duration-150 p-2 mb-4 rounded-md m-1">Add it Now!</Link>
                        </div>
                    </div>
                )}
            </div>
        )
    }
  return (
    <div className="w-full">
        <h1 className="text-center text-2xl font-semibold py-3 bg-white">Can&apos;t Find Your Fav?</h1>
        <div className="w-full bg-cover bg-center relative h-[15rem]" style={backgroundDiv}>
        <div 
            style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            content: " ",
            background: 'rgba(0, 0, 0, 0.35)', 
            borderRadius: '0.25rem',
            }}
        />
        </div>
    </div>
  )
}

export default UserSubmissionList