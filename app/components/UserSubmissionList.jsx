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
            <div className="w-full">
                {submissions && submissions.length ? (
                    <div>
                        <h1 className="bg-white text-3xl text-center font-semibold py-3 mb-2">Your Submissions</h1>
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
                    <div className="w-full">
                        <h1 className="text-center text-2xl font-semibold py-3 bg-white">Your Submissions</h1>
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
                        <div className="absolute top-[30%] pb-2 w-full">
                            <h3 className='text-white text-center font-semibold text-4xl md:text-5xl lg:text-7xl'>Nothing to See!</h3>
                            <div className="flex justify-evenly mt-5">
                                <Link className="font-medium py-2 px-4 md:py-3 md:px-7 md:text-xl bg-slate-100 rounded-md shadow-lg" href='/add-recipe'>Submit Now</Link>
                                <Link className="font-medium py-2 px-4 md:py-3 md:px-7 md:text-xl bg-slate-100 rounded-md shadow-lg" href='/faq'>Learn More</Link>
                            </div>
                        </div>
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
        <div className="absolute top-[30%] pb-2 w-full">
            <h3 className='text-white text-center font-semibold text-4xl md:text-5xl lg:text-7xl'>Sharing Is Caring!</h3>
            <div className="flex justify-evenly mt-5">
                <Link className="font-medium py-2 px-4 md:py-3 md:px-7 md:text-xl bg-slate-100 rounded-md shadow-lg" href='/add-recipe'>Submit Now</Link>
                <Link className="font-medium py-2 px-4 md:py-3 md:px-7 md:text-xl bg-slate-100 rounded-md shadow-lg" href='/faq'>Learn More</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default UserSubmissionList