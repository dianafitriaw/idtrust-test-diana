type CardProps = {
    img: string; 
    title: string;
    batch: string;
    date: string;
  };


export default function Card({img, title, batch, date} : CardProps) {
    return(
        <div className="w-[252px] h-[380px] gap-4 bg-darkblue2">
            <img src={img} 
            alt="gambar"
            className=" w-full h-[212px] object-cover" />
            <div className="p-4 gap-8 h-[168px] flex flex-col justify-between">
                <h3 className="text-xl font-medium text-white font-outfit">{title}</h3>
                <div>
                    <h3 className="text-base font-medium text-green font-outfit">{batch}</h3>
                    <h3 className="text-white">{date}</h3>
                </div>
            </div>
        </div>
    )
}