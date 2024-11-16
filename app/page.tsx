import Image from "next/image";
import Link from "next/link";
import profilePic from '../public/assets/images/hero-pic.png'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-8 pb-20 sm:py-20 sm:px-10 font-[family-name:var(--font-montserrat)]">
      {/* For mobile */}
      <div className="flex flex-col gap-8 row-start-2 items-center lg:hidden">
        <h1 className="scroll-m-20 font-extrabold text-5xl md:text-8xl tracking-tight font-[family-name:var(--font-noto-sans)]">
          ようこそ！
        </h1>
        <div>
          <Image src={profilePic} width={500} height={500} alt="Hero Picture"></Image>
        </div>
        <div className="text-base">
          <p>
            I created this website as part of my learning journey and to let you get to know me better! 🌟
          </p>
          <br></br>
          <p>
            I also enjoy crafting websites, so I’ll likely share updates about my works or projects here. 
          </p>
          <br></br>
          <p>
            今、日本語を勉強しています (I’m currently learning Japanese),  so maybe I’ll share some language insights too. Stay tuned!
          </p>
          <br></br>
          <p>
            どうぞよろしくお願いします! 😊
          </p>
        </div>
        <div className="mt-6">
            <p className="text-sm text-center text-gray-600">Let's Connect</p>
            <div className="flex justify-center space-x-6 mt-4">
              <Link href={"https://github.com/raendyelvicar"} target="_blank">  
                <FaGithub size={25}></FaGithub>
              </Link>
              <Link href={"https://www.linkedin.com/in/raendyelvicar/"} target="_blank">  
                <FaLinkedin size={25} />
              </Link>
              <Link href={"https://www.instagram.com/raendy.elvicar/"} target="_blank">  
                <FaInstagram size={25}/>
              </Link>
            </div>
        </div>
      </div>

      {/* For desktop */}
      <div className="hidden gap-10 row-start-2 lg:flex lg:flex-row lg:items-center lg:justify-center">
        <div className="flex flex-col justify-center gap-20 xl:gap-24">
            <Link className="rotate-[-90deg]" href={"https://github.com/raendyelvicar"} target="_blank">  
              Github
            </Link>
            <Link className="rotate-[-90deg]" href={"https://www.linkedin.com/in/raendyelvicar/"} target="_blank">  
              LinkedIn
            </Link>
            <Link className="rotate-[-90deg]" href={"https://www.instagram.com/raendy.elvicar/"} target="_blank">  
              Instagram
            </Link>
          </div>
        <div className="img-wrapper">
            <Image src={profilePic} width={1000} height={1000} alt="Hero Picture"></Image>
        </div>
        <div className="speech-wrapper">
          <h1 className="scroll-m-20 font-extrabold tracking-tight mb-8 text-6xl xl:text-8xl font-[family-name:var(--font-noto-sans)]">
            ようこそ！
          </h1>
          <div className="w-full xl:w-4/5">
            <p>
              I created this website as part of my learning journey and to let you get to know me better! 🌟
              I also enjoy crafting websites, so I’ll likely share updates about my works or projects here.
            </p>
            <br></br>
            <p>
              今、日本語を勉強しています (I’m currently learning Japanese),  so maybe I’ll share some language insights too. Stay tuned!
            </p>
            <br></br>
            <p>
              どうぞよろしくお願いします! 😊
            </p>
          </div>
        </div>
      </div>
     
    </div>
    
  );
}
