import Link from "next/link";
import Card from "../components/card";

export default function Bootcamp() {
  return (
    <div className="w-full h-auto py-14 px-6 md:px-[72px] gap-6 bg-white">
      <div className="gap-2 text-center text-blackk font-outfit">
        <h1 className="text-3xl font-normal">Bootcamp</h1>
        <h3 className="text-2xl font-light">
          Bergabunglah dengan bootcamp kami dan tingkatkan keterampilan Anda ke
          level berikutnya! Jangan lewatkan kesempatan untuk belajar dan berkembang
          bersama para ahli di industri.
        </h3>
      </div>
      <div className="w-full flex justify-end">
        <Link href="" className="font-outfit text-darkblue2">Lihat Selengkapnya</Link>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center my-8">
        <Card
          img="https://s3-alpha-sig.figma.com/img/dfe1/283e/7711ef63f43ecb8bd056577100ad216e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QY7wZLTz0Rv1T8ncHApbA9B0ejFCx8s8oTspZsCz~lYU47rXk4vLuemPewDDCywozFXFm4~lKkU-GNZnqYx2TL7X9C9AQ-PsU~tazi8zBQwon6GQqOcq1jWZmT1AHVq2YjGCNrwNKd27a0ZvwVPXjP5lwmnKM5HjsEG~I8UmojsF-GuUcy~9F~p~MX32rwxMXDHzrz72CmK86D8V9ZhIDkbtxdLJWEYuCUCvuYJ-aUJisoC11UbrSgzYkz0M9p1seuWOPlAj07As9RX~mF3usa3ZD8FzFuITVDxHVhhGrltbupPQr6idRcTmw78bx8fLSWEndff46rj~STI4I3AvUA__"
          title="Full-stack Web Developer"
          batch="BATCH 4"
          date="Februari 2025"
        />
        <Card
          img="https://s3-alpha-sig.figma.com/img/6174/a405/01b8c01643b916d31f675323005e721d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NKWkeXdvMaOe2fzzliUg4oMwWjvBuHUDG3bjbXJ9KPIu85x0UYufDnuJWuJiZaROUgOsLhx9YE38o2WHefL11aswHQv7PggKewdZoQKaXEdBwTZvf6E~k55nf4dA7~1~5Khmk6tywifr08ay2rQWTJSIX4t9AqQ7kFhRB-1Bxp~wNTmpNQCv~bySw0iNff~22TfPXo5iP4U1hnbvFOHSkiVLOM857NpTMI2qlR0~wU8O-c6Ax0D~SHgQIPuJJ7BM6hV-vAImnkD1lzJAmOwITZfqAjPTW3BnHhZsYURnHk-baYGYfynRFbpktXKMMF7epBByB9cRc6S0ZQie9O3gUQ__"
          title="UI/UX Design"
          batch="BATCH 2"
          date="Januari 2025"
        />
        <Card
          img="https://s3-alpha-sig.figma.com/img/a6ce/ec83/13a3c4dc4b5edebde7c1dec5edddace4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkWw47SLK2KEhInZ5jlCfZd-qVu7Y5UxjXXVPGOLvxb5drHf7DR6iylyvK-IikaPAcqrIqIQG-Ikl6W4lqSZzEbbZEiQQ8rwvUQ1tN9zteXZXG4k75MY6V5BU9FIYF6EGe4hJ4sNrjE43JaTusJmFHBT9yC4GCxi6NT9TmgNFa6Anhwru4w4yYkeDq7iHv4Nna6C~SS1fM9azq7iAWYdmCcYsisvbX3P-nuhp2xAWSKKRxALbpQt2ozjmB8kyE~L-R~0N1If0uxSWOVuXnU~S~RPg7qEV8Uvl98JTxRu5xStaq5fWQbgtA81mipJ~mtT6KzLPaSO7czfRd1et2q-9A__"
          title="Human Resources"
          batch="BATCH 1"
          date="Desember 2025"
        />
        <Card
          img="https://s3-alpha-sig.figma.com/img/f9ed/0b4a/31d68acc9dff7109d2fbb9f23c2c7dfb?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ANeQMQ1u~Pke66GLXXcyyD3H9SAIuynBxoJeU4dZUdbZzT2WlLScB~2kvlI14627uzWph~slapRMcznj0EQZHZZ9sVO7v4Fec1~P25LE3FDz~kx0Fp4eNHOpYyeX2IhP6lPZGX59gpxYOO924O1ErWRgQXkAxObUUSHbKkQTG9Ozm0zoIEA~cFlMQuGO5MEs6kXsw720MQfY5OB2fU9F~FESzoJQBSrtRoACnlwqD9d-6mZL0Hk0Rt41DEAjBSkTmFCMDWOoBHJIpT34GJ-nUe1rkKyDJ8ucVrhCpP75TNGRmpA0TYV~~e-G0FFSV4~hFmCg~FM94lkNX6mqA-z9QA__"
          title="Digital Marketer"
          batch="BATCH 3"
          date="Januari 2025"
        />
      </div>
    </div>
  );
}
