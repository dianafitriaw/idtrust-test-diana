export default function Program() {
    return(
        <div className="w-full h-full bg-whitegrey py-16 flex  flex-col lg:flex-row md:flex-col justify-center items-center font-outfit">
            <div className="w-full max-w-[426px] h-auto bg-white">
                <div className="h-[442px] gap-4 p-6">
                    <h3 className="h-[28px] font-medium text-xl text-darkblue2">Belajar lebih flexibel</h3>
                    <div className="w-[378px] h-[350px] gap-3 flex justify-center items-center">
                        <img src="/learning.png" alt="icon" className="h-[254px] w-[300px]" />   
                    </div>
                </div>
                <div className="w-full h-[120px] flex justify-center items-center px-6 m-0 bg-darkblue text-white text-base font-light">
                    <h3 className="m-0">Belajar kapan pun, di mana pun, secara mandiri. Bebas memilih kelas sesuai minat belajar.</h3>
                </div> 
            </div>
            <div className="w-full max-w-[426px] h-auto bg-natural">
                <div className="h-[442px] gap-4 p-6">
                    <h3 className="h-[28px] font-medium text-xl text-darkblue2">Materi ter-up to date</h3>
                    <div className="w-[378px] h-[350px] gap-3 flex justify-center items-center">
                        <img src="/curriculum.png" alt="icon" className="h-[254px] w-[300px]" />   
                    </div>
                </div>
                <div className="w-full h-[120px] flex justify-center items-center px-6 m-0 bg-green text-blackk text-base font-light">
                    <h3 className="m-0">Kurikulum dikembangkan bersama perusahaan dan pemilik teknologi dunia sesuai kebutuhan industri terkini.</h3>
                </div> 
            </div>
            <div className="w-full max-w-[426px] h-auto bg-white">
                <div className="h-[442px] gap-4 p-6">
                    <h3 className="h-[28px] font-medium text-xl text-darkblue2">Mentor berpengalaman</h3>
                    <div className="w-[378px] h-[350px] gap-3 flex justify-center items-center">
                        <img src="/educator.png" alt="icon" className="h-[254px] w-[300px]" />   
                    </div>
                </div>
                <div className="w-full h-[120px] flex justify-center items-center px-6 m-0 bg-darkblue text-white text-base font-light">
                    <h3 className="m-0">Pengajar dengan pengalaman nyata sebagai praktisi mampu membuat Anda lebih mengenal industri.</h3>
                </div> 
            </div>
        </div>
    )
}

