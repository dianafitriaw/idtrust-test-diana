import Link from "next/link";
import CardLearning from "../components/cardLearning";

export default function Learning() {
    return(
    <div className="w-full h-[608px] bg-whitegrey py-14 px-[72px] flex flex-col md:flex-row items-center justify-between font-outfit">
        <div className="h-[194px] w-[528px] md:gap-4 pb-5 ">
            <h3 className="text-blackk font-normal text-4xl pb-4">Learning Path</h3>
            <h3 className="font-light text-xl text-blackk">Mulailah perjalanan belajar Anda di Learning Path Aplus! Tingkatkan pengetahuan dan keterampilan dengan panduan terstruktur untuk mencapai tujuan Anda. Yuk, belajar bersama sekarang!</h3>
        </div>
        <div className="w-full flex justify-end">
        <Link href="" className="font-outfit text-darkblue2">Lihat Selengkapnya</Link>
        </div>
        <div className="flex flex-row gap-4">
            <CardLearning img=" https://s3-alpha-sig.figma.com/img/2e9f/0114/581dedba512d374e671f4d3167d4d041?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M14t7kFTv0lXz7aTO54v0gCdU8KWkM6KPSX9FaFExCa86u0GOGVCgq1zsHvbhLVDYw~1Let1p6R42VQeqbasPKYho~105repG~Uaj3hdo1DYkWBDQe7hkP~DTYPBbEWJ1avraXjdS0GqMqpYLTMxbYAuFr~OceAWjYeIfkKRNN5AqeTr~cQgcir9ygs3RF71ohM~vX43YLWbQBFgFyqvgIj1nau9IW5NHQFi~jQZ01K9u5g553vg6FNKOwxRuQTze5RmsBDVLNFrBPs23zLaCtnddhIqSXw8DDTXUbz2CBEjhGsqR~navpm-LAAgmvjKxFZhPEBmKBzuxP97bkty6Q__" 
            teks="Android Developer" />
            <CardLearning img=" https://s3-alpha-sig.figma.com/img/42f3/0f59/4f8b261961af0d4f58c0697a2722fdba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnPzgHERSnzHNFXjonQpkrvokHNx679E-cVs4qpCyXDrIjsIwdMnBdt-5vtcJBnGe1tnaEegjGaxLfXsdd4I-rNQ4j80~-kvU2Wu7w~9H~~tUPfjBekV0HYRH6v-XemknRNnvK35fexz4nYuzSgKrQTKhUfLN8oZq~stOK8wgiv99kPkru3nMf1WwC9qYfZ0SNLIE2kuThIaN00NL1CPBBB3qoGO5lgVA0onbTNuQq4jnsCjO1iatjtlx8aCKtwYd83LNg0ZU~XmpayKoqXOlPVMQ7CrlF0aBh-vfC2dOL5femm4RlTrs7ziCl6t2hKY1~dqgM8YDqLpapGW7WZjsQ__" 
            teks="Graphic Design" />
        </div>
    </div>
    )
}