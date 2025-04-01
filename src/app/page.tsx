import { Nunito_Sans } from "next/font/google";
const nunitoSans = Nunito_Sans({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: "--font-nunito",

});
export default function Home() {
  return (
    <div className={`${nunitoSans.variable} w-screen h-screen bg-background`}>
      <div className="justify-center items-center flex h-screen flex-col p-16 gap-8">
      
        {/*topside*/}
        <div className="flex flex-col justify-center items-center">

          <h1 className="text-[36px] font-main font-bold">João Mello</h1>
          <h3 className="text-[16px] font-main">Software Developer</h3>

        </div>
      
        {/*botside*/}
        <div className="w-[24rem] h-fit flex justify-center">
          <ul className="flex flex-col justify-center items-center gap-5 font-main">
            <li><button className="btn btn-soft w-[18rem] "><a href="www.linkedin.com/in/joaomellod">Linkedin</a></button></li>
            <li><button className="btn btn-soft w-[18rem] "><a href="https://github.com/JoaoMelloD">Github</a></button></li>
            <li><button className="btn btn-soft w-[18rem]"><a href="https://x.com/melloapenas">Twitter</a></button></li>
            <li><button className="btn btn-soft w-[18rem]"><a href="#">Portfolio</a></button></li>
            <li><button className="btn btn-soft w-[18rem]"><a href="#">Baixar Curriculo</a></button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
