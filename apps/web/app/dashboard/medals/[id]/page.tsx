import {Metadata} from "next";
import {MedalType} from "@medal-registry/types";
import {getOneMedal} from "@/shared/api/medalActions";
import Loader from "@/app/components/loader/Loader";

interface MedalProps{
    params: Promise<{id: string}>
}

export async function generateMetadata({ params }: MedalProps):Promise<Metadata>{
    const {id} = await params;
    const medal: MedalType = await getOneMedal(id);
    return {
        title: medal.name,
        description: medal.description,
    }
}

const MedalPage = async ({params}: MedalProps) => {
    const {id} = await params;
    const medal: MedalType = await getOneMedal(id);

    if (!medal) return <div className="flex items-center justify-center h-full"><Loader size={0.5}/></div>

    return (
        <div>
          <h1>{medal.name}</h1>
        </div>
    );
};

export default MedalPage;