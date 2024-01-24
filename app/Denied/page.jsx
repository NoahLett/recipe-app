import Image from "next/image";


const DeniedPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-[7rem] mx-2">
        <h1 className="text-3xl font-semibold text-center">Nothing to See Here!</h1>
        <h4 className="mt-3 text-lg font-medium text-center">We didn&apos;t find admin privileges in your profile.</h4>
        <Image width={500} height={500} src='/security.svg' alt='Secure Server' priority={true} />
    </div>
  )
};

export default DeniedPage;