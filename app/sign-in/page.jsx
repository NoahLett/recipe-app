import GithubSignInButton from '../components/GithubSignInButton';
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import SignInCredentialsForm from "../components/SignInCredentialsForm";

export default async function SignInPage() {
  const session = await getServerSession(options);

  if (session) redirect("/");

  return (
    <div className="min-h-screen pt-20 px-2 mx-auto max-w-[1024px]">
        <h1 className="mt-10 mb-4 text-center text-4xl font-bold">Sign In</h1>
        <div className='mt-7 sm:mx-auto sm:w-full sm:max-w-sm px-5 py-5 rounded-md shadow-md bg-slate-50'>
            <GithubSignInButton />
            <div className="text-lg font-semibold text-slate-600 text-center mt-6">
                Or
            </div>
            <SignInCredentialsForm />
        </div>
    </div>
  );
}