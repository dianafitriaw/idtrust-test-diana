'use client'

import Link from "next/link";
import Card from "../components/card";
import { useEffect, useRef, useState } from "react";


export default function Bootcamp() {
  const data = [
    {
      img: "https://s3-alpha-sig.figma.com/img/dfe1/283e/7711ef63f43ecb8bd056577100ad216e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QY7wZLTz0Rv1T8ncHApbA9B0ejFCx8s8oTspZsCz~lYU47rXk4vLuemPewDDCywozFXFm4~lKkU-GNZnqYx2TL7X9C9AQ-PsU~tazi8zBQwon6GQqOcq1jWZmT1AHVq2YjGCNrwNKd27a0ZvwVPXjP5lwmnKM5HjsEG~I8UmojsF-GuUcy~9F~p~MX32rwxMXDHzrz72CmK86D8V9ZhIDkbtxdLJWEYuCUCvuYJ-aUJisoC11UbrSgzYkz0M9p1seuWOPlAj07As9RX~mF3usa3ZD8FzFuITVDxHVhhGrltbupPQr6idRcTmw78bx8fLSWEndff46rj~STI4I3AvUA__",
      title: "Full-stack Web Developer",
      batch: "BATCH 4",
      date: "Februari 2025",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/6174/a405/01b8c01643b916d31f675323005e721d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NKWkeXdvMaOe2fzzliUg4oMwWjvBuHUDG3bjbXJ9KPIu85x0UYufDnuJWuJiZaROUgOsLhx9YE38o2WHefL11aswHQv7PggKewdZoQKaXEdBwTZvf6E~k55nf4dA7~1~5Khmk6tywifr08ay2rQWTJSIX4t9AqQ7kFhRB-1Bxp~wNTmpNQCv~bySw0iNff~22TfPXo5iP4U1hnbvFOHSkiVLOM857NpTMI2qlR0~wU8O-c6Ax0D~SHgQIPuJJ7BM6hV-vAImnkD1lzJAmOwITZfqAjPTW3BnHhZsYURnHk-baYGYfynRFbpktXKMMF7epBByB9cRc6S0ZQie9O3gUQ__",
      title: "UI/UX Design",
      batch: "BATCH 2",
      date: "Januari 2025",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/a6ce/ec83/13a3c4dc4b5edebde7c1dec5edddace4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkWw47SLK2KEhInZ5jlCfZd-qVu7Y5UxjXXVPGOLvxb5drHf7DR6iylyvK-IikaPAcqrIqIQG-Ikl6W4lqSZzEbbZEiQQ8rwvUQ1tN9zteXZXG4k75MY6V5BU9FIYF6EGe4hJ4sNrjE43JaTusJmFHBT9yC4GCxi6NT9TmgNFa6Anhwru4w4yYkeDq7iHv4Nna6C~SS1fM9azq7iAWYdmCcYsisvbX3P-nuhp2xAWSKKRxALbpQt2ozjmB8kyE~L-R~0N1If0uxSWOVuXnU~S~RPg7qEV8Uvl98JTxRu5xStaq5fWQbgtA81mipJ~mtT6KzLPaSO7czfRd1et2q-9A__",
      title: "Human Resources",
      batch: "BATCH 1",
      date: "Desember 2025"
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/f9ed/0b4a/31d68acc9dff7109d2fbb9f23c2c7dfb?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ANeQMQ1u~Pke66GLXXcyyD3H9SAIuynBxoJeU4dZUdbZzT2WlLScB~2kvlI14627uzWph~slapRMcznj0EQZHZZ9sVO7v4Fec1~P25LE3FDz~kx0Fp4eNHOpYyeX2IhP6lPZGX59gpxYOO924O1ErWRgQXkAxObUUSHbKkQTG9Ozm0zoIEA~cFlMQuGO5MEs6kXsw720MQfY5OB2fU9F~FESzoJQBSrtRoACnlwqD9d-6mZL0Hk0Rt41DEAjBSkTmFCMDWOoBHJIpT34GJ-nUe1rkKyDJ8ucVrhCpP75TNGRmpA0TYV~~e-G0FFSV4~hFmCg~FM94lkNX6mqA-z9QA__",
      title: "Digital Marketer",
      batch: "BATCH 3",
      date: "Januari 2025"
    },
    {
      img:"https://s3-alpha-sig.figma.com/img/8ac4/8bba/249a33fcd1a2b8dca64098c6972dd5da?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gL4AImC2L7v4W9bZI2S5~xr1lh6seoqz32v3GOlPbOl0e09An9R29HxrznWxl7ieHBBjTHnWB6tGe8tE5XWZ7h8kqd8GGqdsdhagQLgoRLWWHxTH5IwmeDNuW2kFRwBTyTYe0~nXJlmlCVZvPhV-7-MLkWomXxiSKzFfaZdtKoPr0kUvT3nCAk-ah42i9fPug39GY5mHg9S0emPQZRnLXaokgXSMfn-oI1i89Ll6D6XsVs5-gTRwtEeXtANBinvJzOtTZJ70ptE15qVe3xDcRhLeZ-YVEk510GvhH~793QpcR6RQY0KA0Hvhsrm9A39IoC54T881VSos8-p7ZS-bVw__",
      title:"React Developer",
      batch:"BATCH 3",
      date:"Maret 2025",
    },
    {
      img:"https://s3-alpha-sig.figma.com/img/1d77/450d/85e5d46f906285701d202832b0ac81f9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dzh0iR3MNr7hLrae5mL90iVhGVhr2t5hXJljVHdnYRZ8fc9exoUr9z1QRhq3GTYlCUsEzidMaFG23O5DsNk6lC7CPcj5WaAADcu1x6~vaIzKxWx-JCJ2Z5-VuO566DCqX4scGQnID4~2bkGjgcJWupBaJH7OZKqFEb0SMupBLe8Hfu-jZbY28U73tZmnLhor6~CkKY4ulD2DWClZXi2~fpcHKZoJDOQjqLcpdVbQzvYHDak7eeeptyBLCMfif1uvCiZolUmsOazuIM7BAQFrRhIUiZQFmeXKKZ5xZuOJ3RLr2Ve724tB0sQqm-7y6E46Uvp2L1~s53JyzwiISMwMsA__",
      title:"Visual Design",
      batch:"BATCH 5",
      date:"Maret 2025",
    },
    {
      img:"https://s3-alpha-sig.figma.com/img/3672/30e4/2429003ff3319f51d6341610c3a66af7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J2XTuu6B3Yxm8kgvVDRI~8VILez1oRXIXn7QBcCBq4N93zaPlcjFj3qwSWFImyNv4-2V6KTkTk32WmBmoDJ9H9MACvobXAy9TdHfof2JPPtKR~A6ACMSeSV2CrV9tFBhm8cpZgmyJboOG0tbTBoksKpe~tRMAnjMICK3T6OS1uZGmuYriIl8YPNb17-Waok3OCiE83shP9~EHa94XqZWU8TL7ANHL6z2y71GNz3nzIsLfkDdp4mn6qi2KWLPOqypc71wEJC66nOEExhheatpd~a9jDoSTi-Mjum0fXnYkfVKqfOHsCtN85Da38rNh9MbC9CBnr39BttWCraFFtKWeA__",
      title:"Project Manager",
      batch:"BATCH 6",
      date:"Januari 2025",
    },
    {
      img:"https://s3-alpha-sig.figma.com/img/7e61/9beb/a5f92e95071312f8b6f546724bec1e6f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qsesR-HEAioEjEEzgX2J4k30GBZ31huJoML~XiS0j9gIEQCUy9e~QC8MRBUGsNU5YvnraAgQ0Q6sWUgsp2INbD7CEc3qgJ4QXFYswLouaQS4Is0XERYcuwUMBBJMWaX15M46e3KZl2DXVGRGPt5BlQb2UTnSVJYjnf47a2xoahH-sL74CI7n4n8PY3UUkigiH1FYqUCr37bzkR8Rwsq1FX~dtkhmXR2fFHJMMxgltVqd0YvZy00YI125Uwwt5-bTSMSPs32asZEO8MYoQBx9emaT8a5tXQ4FeXwC~3CXpZn2lAI~VLrNaoPWd-C68~NEsCPZJNqyi2HPUFSu7OriFg__",
      title:"Data Scientist",
      batch:"BATCH 2",
      date:"Januari 2025",
    },
  ]
  
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="w-full h-auto py-14 px-6 md:px-[72px] gap-6 bg-white">
      <div className="gap-2 text-center text-blackk">
        <h1 className="text-3xl font-normal font-outfit">Bootcamp</h1>
        <h3 className="text-2xl font-light font-outfit">
          Bergabunglah dengan bootcamp kami dan tingkatkan keterampilan Anda ke
          level berikutnya! Jangan lewatkan kesempatan untuk belajar dan berkembang
          bersama para ahli di industri.
        </h3>
      </div>
      <div className="w-full flex justify-end">
        <Link href="" className="font-outfit text-darkblue2">Lihat Selengkapnya</Link>
      </div>
      <div className="carousel my-12 mx-auto">
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
                <Card
                  key={index}
                  img={item.img}
                  title={item.title}
                  batch={item.batch}
                  date={item.date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-6">
        <button
            onClick={movePrev}
            className="px-4 py-2 bg-darkblue2 text-white rounded disabled:opacity-50"
            disabled={isDisabled('prev')}
          >
            {'<'}
        </button>
        <button
            onClick={moveNext}
            className="px-4 py-2 bg-darkblue2 text-white rounded disabled:opacity-50"
            disabled={isDisabled('next')}
          >
            {'>'}
        </button>
      </div>
    </div>
  );
}
