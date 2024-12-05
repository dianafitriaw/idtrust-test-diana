import Dropdown from "../components/dropdown";

export default function Contact() {
  return (
    <div className="w-full bg-white py-14 gap-10 font-outfit flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        <h3 className="font-normal text-3xl text-blackk font-outfit">Tunggu apa lagi?</h3>
        <h3 className="font-light text-xl text-blackk font-outfit">
          Tingkatkan skill Anda dengan Aplus. Hubungi kami untuk informasi lebih lanjut
        </h3>
      </div>
      <div className="w-full max-w-[1136px] gap-4 flex flex-col md:flex-row justify-center items-center">
        <form className="w-full md:w-[50%] px-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-graynatural"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-white border border-graynatural text-graynatural text-sm rounded-md focus:ring-graynatural focus:border-graynatural block w-full pl-10 p-2.5"
              placeholder="Masukkan email anda"
            />
          </div>
        </form>
        <div className="w-full md:w-[50%] md:px-0 px-4">
          <Dropdown />
        </div>
      </div>
      <div className="w-full max-w-[1136px] md:px-0 px-4">
        <textarea
          id="message"
          className="block p-2.5 w-full h-[100px] text-sm text-graynatural bg-gray-50 rounded-lg border border-graynatural focus:ring-graynatural focus:border-graynatural"
          placeholder="Pesan"
        ></textarea>
        <div className="flex w-full justify-end mt-2">
          <button className="w-[102px] h-[48px] bg-darkblue2 hover:bg-darkblue font-outfit rounded-sm text-white text-sm">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
