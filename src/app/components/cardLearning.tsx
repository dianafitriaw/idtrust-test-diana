type CardProps = {
    img: string; 
    teks: string;
  };

export default function CardLearning({img, teks} : CardProps) {
    return(
        <div className=" relative w-[252px] h-[380px] gap-4 shadow-md">
            <img src={img} 
            alt="gambar"
            className=" w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center pb-4">
                <h2 className="text-white text-lg font-medium font-outfit">{teks}</h2>
            </div>
        </div>
    )
}