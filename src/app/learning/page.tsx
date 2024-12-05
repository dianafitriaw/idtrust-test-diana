"use client"

import Link from "next/link";
import CardLearning from "../components/cardLearning";
import { useEffect, useRef, useState } from "react";

export default function Learning() {
    const data = [
        {
            img:"https://s3-alpha-sig.figma.com/img/2e9f/0114/581dedba512d374e671f4d3167d4d041?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M14t7kFTv0lXz7aTO54v0gCdU8KWkM6KPSX9FaFExCa86u0GOGVCgq1zsHvbhLVDYw~1Let1p6R42VQeqbasPKYho~105repG~Uaj3hdo1DYkWBDQe7hkP~DTYPBbEWJ1avraXjdS0GqMqpYLTMxbYAuFr~OceAWjYeIfkKRNN5AqeTr~cQgcir9ygs3RF71ohM~vX43YLWbQBFgFyqvgIj1nau9IW5NHQFi~jQZ01K9u5g553vg6FNKOwxRuQTze5RmsBDVLNFrBPs23zLaCtnddhIqSXw8DDTXUbz2CBEjhGsqR~navpm-LAAgmvjKxFZhPEBmKBzuxP97bkty6Q__",
            teks:"Android Developer",
        },
        {
            img:"https://s3-alpha-sig.figma.com/img/42f3/0f59/4f8b261961af0d4f58c0697a2722fdba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnPzgHERSnzHNFXjonQpkrvokHNx679E-cVs4qpCyXDrIjsIwdMnBdt-5vtcJBnGe1tnaEegjGaxLfXsdd4I-rNQ4j80~-kvU2Wu7w~9H~~tUPfjBekV0HYRH6v-XemknRNnvK35fexz4nYuzSgKrQTKhUfLN8oZq~stOK8wgiv99kPkru3nMf1WwC9qYfZ0SNLIE2kuThIaN00NL1CPBBB3qoGO5lgVA0onbTNuQq4jnsCjO1iatjtlx8aCKtwYd83LNg0ZU~XmpayKoqXOlPVMQ7CrlF0aBh-vfC2dOL5femm4RlTrs7ziCl6t2hKY1~dqgM8YDqLpapGW7WZjsQ__",
            teks:"Grapich Design",
        },
        {
            img:"https://s3-alpha-sig.figma.com/img/d330/c083/9c06bd9131b8c746add36902b309044e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6fXOSDQR9oUSR-1A-7WmwkWdGZq0BiGu0-C80GWSqNXfWsCixQAOc411KZSpWzUKkkdao6jpR~CPT1RTc3AEs~kCPJGxLXl6TGGLBg6gt960S2CpmF9ROj0wBqNSWQK1DasiBWwi21gGgnUPRi~vvBMdkwZrfKokwSTOoGJXHG8TOpMfxRKwqunS45lshmu8jFQfmt7YGjtRFUaD125B0S6LCntoS0pa515JlNKcphieMxb3nOD9ogDPVM6JUcL~1kkt38Q6a5KF0m6U6-3kytnRKIPPwXQaDxgyFUjgUbMRldvcuCXXWyQ814X-wsOoOFUHqiCCoAnYILeFGBtAw__",
            teks:"Frontend Developer",
        },
        {
            img:"https://s3-alpha-sig.figma.com/img/ce99/12e5/572203a7c93ee258de374268671c3470?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X4AsPVZU4dpv3vTp2UMd-dJjRouWrbhtOeqOpB-KULeO-r6KHD9JlH4N1ouayfgorkJBX68Kyz-f7jKgAa51AYWiYFrwVCgHk34IpMOjUYN78xaJFQtbusbSZQhJHspiqeq5gfCIa~qUJAnukQzqw1lq0pYPIHy-5ieWghujtZ~U6OIQ1Y5VFb~ObnU-vDv965il~MP2W4Fqyi-X3TZK880CXjyY3683TLzBkUggBTC2kCwSCkyzfivecAiV3jczmA-x5WRx2rcqE-HaA25JudO0qBt9mNFHF9tOPl-biCaB5trQrbEX~uCbGP1OkWFNYx5ZLGYcXwTPDbkmyxEPQA__",
            teks:"Machine Learning",
        },
    ];

    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef<HTMLDivElement | null>(null);

    const movePrev = () => {
        if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const moveNext = () => {
        if (
        carousel.current &&
        currentIndex <Math.ceil(maxScrollWidth.current / carousel.current.offsetWidth)
        ) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    useEffect(() => {
        if (carousel.current) {
        maxScrollWidth.current = carousel.current.scrollWidth - carousel.current.offsetWidth;
        }
    }, []);

    useEffect(() => {
        if (carousel.current) {
        carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    return(
    <div className="w-full bg-whitegrey py-14 px-[72px] flex flex-col md:flex-row items-center justify-between font-outfit">
       <div className="h-auto w-full md:w-[528px] md:gap-4 pb-5 font-outfit md:text-left">
            <h3 className="text-blackk font-normal text-2xl md:text-4xl pb-4">
                Learning Path
            </h3>
            <h3 className="font-light text-base md:text-xl text-blackk">
                Mulailah perjalanan belajar Anda di Learning Path Aplus! Tingkatkan
                pengetahuan dan keterampilan dengan panduan terstruktur untuk mencapai
                tujuan Anda. Yuk, belajar bersama sekarang!
            </h3>
        </div>
        <div className="flex flex-col">
            <div className="w-full flex justify-end md:mb-2 ">
                <Link href="" className="font-outfit text-darkblue2">Lihat Selengkapnya</Link>
            </div>
            <div className="carousel my-12 mx-auto md:w-[536px]">
                <div className="relative overflow-hidden">
                    <div
                        ref={carousel}
                        className="carousel-container relative flex gap-8 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                        >
                        {data.map((item, index) => (
                        <div
                            key={index}
                            className="carousel-item relative snap-start"
                        >
                            <CardLearning
                            key={index}
                            img={item.img}
                            teks={item.teks}
                            />
                        </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
                <button
                    className="px-4 py-2 bg-darkblue2 text-white rounded disabled:opacity-50"
                    onClick={movePrev} 
                    disabled={currentIndex === 0}
                    >
                        {"<"}
                </button>
                <button
                    className="px-4 py-2 bg-darkblue2 text-white rounded disabled:opacity-50"
                    onClick={moveNext}
                    disabled={carousel.current ? currentIndex >= Math.ceil(maxScrollWidth.current / carousel.current.offsetWidth) : false}
                >
                    {">"}
                </button>
            </div>
        </div>
    </div>
    )
}