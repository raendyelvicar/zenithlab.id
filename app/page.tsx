import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Page Under Development
        </h1>
        <h5 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          We’re currently working on this page to bring you something great!.
          Thank you for your patience. Stay tuned for updates!
        </h5>
        <div className="mt-6">
            <p className="text-base text-gray-600">Let's Connect</p>
            <div className="flex justify-center space-x-6 mt-4">
              <Link href={"https://github.com/raendyelvicar"} target="_blank">  
                <FaGithub size={30}></FaGithub>
              </Link>
              <Link href={"https://www.linkedin.com/in/raendyelvicar/"} target="_blank">  
                <FaLinkedin size={30} />
              </Link>
              <Link href={"https://www.instagram.com/raendy.elvicar/"} target="_blank">  
                <FaInstagram size={30}/>
              </Link>
            </div>
        </div>
      </div>
    </div>
    
  );
}
