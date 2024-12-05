import Bootcamp from "./bootcamp/page";
import Contact from "./contact/page";
import Learning from "./learning/page";
import Program from "./program/page";

export default function Home() {
  return (
    <div className="w-full h-full bg-whitegrey overflow-hidden">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-16 py-10 lg:py-14 gap-8">
        <div className="flex flex-col font-light text-darkblue2 gap-6 lg:gap-14 w-full lg:w-[409px]">
            <h1 className="text-4xl lg:text-6xl text-left font-outfit">Upgrade skill Anda hari ini!</h1>
            <h3 className="text-sm lg:text-base text-left font-outfit">
                Yuk, mulai belajar di Aplus! Temukan berbagai materi menarik dan pelajari keterampilan baru untuk mendukung perkembangan diri Anda. Belajar jadi lebih mudah dan menyenangkan bersama kami!
            </h3>
            <div className="flex justify-start">
                <button className="w-[155px] h-[48px] bg-darkblue2 hover:bg-darkblue text-white rounded-sm font-outfit">Belajar Sekarang</button>
            </div>
        </div>
        <img 
            src="/property1.png" 
            alt="icon" 
            className="w-full lg:w-[656px] h-auto rounded-md shadow-md" 
        />
      </div>
      <Program/>
      <Bootcamp/>
      <Learning/>
      <Contact/>
  </div>

  )
}
