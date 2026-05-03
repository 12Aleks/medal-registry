import {Metadata} from "next";
import {MedalType} from "@medal-registry/types";
import {getOneMedal} from "@/shared/api/medalActions";
import Loader from "@/app/components/loader/Loader";
import ImageComponent from "@/app/components/image/ImageComponent";

interface MedalProps{
    params: Promise<{slug: string}>
}

export async function generateMetadata({ params }: MedalProps):Promise<Metadata>{
    const {slug} = await params;
    const medal: MedalType = await getOneMedal(slug);
    return {
        title: medal.name,
        description: medal.description,
    }
}

const MedalPage = async ({params}: MedalProps) => {
    const {slug} = await params;
    const medal: MedalType = await getOneMedal(slug);

    if (!medal) return <div className="flex items-center justify-center h-full"><Loader size={0.5}/></div>

    return (
        <div className="flex  justify-center">
          <ImageComponent url={medal?.images?.at(0)} title={medal.name} width={500} height={500} />
          <div>
          <h2 className="mb-3 text-md font-semibold">Type: {medal.medalType}</h2>
          <p>Description: {medal.description}</p>
          </div>
        </div>
    );
};

export default MedalPage;