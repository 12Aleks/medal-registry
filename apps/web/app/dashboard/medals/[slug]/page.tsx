import {Metadata} from "next";
import {MedalType, ParamsPropsType} from "@medal-registry/types";
import {getOneMedal} from "@/shared/api/medalActions";
import Index from "@/app/components/loader";
import ImageComponent from "@/app/components/image/ImageComponent";

export async function generateMetadata({ params }: ParamsPropsType):Promise<Metadata>{
    const {slug} = await params;
    const medal: MedalType = await getOneMedal(slug);
    return {
        title: medal.name,
        description: medal.description,
    }
}

const MedalPage = async ({params}: ParamsPropsType) => {
    const {slug} = await params;
    const medal: MedalType = await getOneMedal(slug);

    if (!medal) return <div className="flex items-center justify-center h-full"><Index size={0.5}/></div>

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