import { Nunito_Sans } from "next/font/google";
import { FileUser, Linkedin, Github, Twitter, Palette } from "lucide-react";
import ThemeOption from "@/components/ThemeOption";
const nunitoSans = Nunito_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Home() {
  return (
    <div className={`${nunitoSans.variable} w-screen h-screen bg-background }`}>
      <div className="justify-center items-center flex h-screen flex-col p-16 gap-8">
        <div className="theme-options">
        <ThemeOption />
        </div>
        {/*titulos*/}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[36px] font-main font-bold">João Mello</h1>
          <h3 className="text-[16px] font-main">Software Developer</h3>
        </div>

        {/*links*/}
        <div className="w-[24rem] h-fit flex justify-center">
          <ul className="flex flex-col justify-center items-center gap-5 font-main">
            <li>
              <button className="btn btn-outline w-[18rem] flex justify-between items-center hover:bg-foreground hover:text-background hover:border-background">
                <a
                  href="//www.linkedin.com/in/joaomellod"
                  className=" ml-6 text-center flex-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                <Linkedin />
              </button>
            </li>
            <li>
              <button className="btn btn-outline w-[18rem] flex justify-between items-center hover:bg-foreground hover:text-background hover:border-background">
                <a
                  href="//github.com/JoaoMelloD"
                  className=" ml-6 text-center flex-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <Github />
              </button>
            </li>
            <li>
              <button className="btn btn-outline w-[18rem] flex justify-between items-center hover:bg-foreground hover:text-background hover:border-background">
                <a
                  href="//x.com/melloapenas"
                  className=" ml-6 text-center flex-1 w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <Twitter />
              </button>
            </li>
            <li>
              <button className="btn btn-outline w-[18rem] flex justify-between items-center hover:bg-foreground hover:text-background hover:border-background">
                <a
                  href="#"
                  className=" ml-6 text-center flex-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
                <Palette />
              </button>
            </li>
            <li>
              <button className="btn btn-outline w-[18rem] flex justify-between items-center hover:bg-foreground hover:text-background hover:border-background">
                <a
                  href="/curriculo.pdf"
                  download="curriculo.pdf"
                  className=" ml-6 text-center flex-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Curriculo
                </a>
                <FileUser />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
