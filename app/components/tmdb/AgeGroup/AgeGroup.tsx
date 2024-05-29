import { CountryRelease, MovieReleaseData } from "@/app/interface/iReleaseDates";
import getReleaseDates from "@/app/utils/tmdb/ReleaseDates";
import { useEffect, useState } from "react"
import Livre from '../../../../public/L-AUTO.jpg'
import NR10 from '../../../../public/NR10-AUTO.jpg'
import NR12 from '../../../../public/NR12-AUTO.jpg'
import NR14 from '../../../../public/NR14-AUTO.jpg'
import NR16 from '../../../../public/NR16-AUTO.jpg'
import NR18 from '../../../../public/NR18-AUTO.jpg'
import Image from "next/image";

export default function AgeGroup({ id, country, size }: { id: number, country: string, size?: number }) {
  const [releaseDates, setReleaseDates] = useState<MovieReleaseData>();

  useEffect(() => {
    const fetchReleaseDates = async () => {
      try {
        const data = await getReleaseDates(id);
        setReleaseDates(data);
      } catch (error) {
        console.error("Erro ao buscar data de lançamento:", error);
      }
    }

    fetchReleaseDates();
  }, [id]);

 const ageGrup = releaseDates?.results.find((result) => result.iso_3166_1 === country)?.release_dates;
 const image:{ [key: string]: string } = {
    '10': NR10.src,
    '12': NR12.src,
    '14': NR14.src,
    '16': NR16.src,
    '18': NR18.src,
    '': Livre.src,
    undefined: Livre.src
  }

  return (
    <div>
      <ul className="flex flex-row gap-2">
      <li>Classificação Indicativa:</li>
        {ageGrup?.map((age) => (
          <li key={age.release_date}>
          <Image src={image[age.certification]} title={age.certification ?? 'Livre'}  alt={age.certification ?? 'Livre'} width={size ?? 24} height={size ?? 24}   />
          </li>
        ))}
      </ul>
    </div>
  )
}