import {Metadata} from "next";

import Index from "@/app/components/loader";
import {getOneRegiment} from "@/shared/api/regimentActions";
import {ParamsPropsType, RegimentType} from "@medal-registry/types";

export async function generateMetadata({ params }: ParamsPropsType):Promise<Metadata>{
    const {slug} = await params;
    const regiment: RegimentType = await getOneRegiment(slug);
    return {
        title: regiment.name,
        description: regiment.description,
    }
}

const regimentPage = async ({params}: ParamsPropsType) => {
    const {slug} = await params;
    const regiment: RegimentType = await getOneRegiment(slug);

    if (!regiment) return <div className="flex items-center justify-center h-full"><Index size={0.5}/></div>

    return (
        <div className="flex  justify-center">
          <div>
          <p>Description: {regiment.description}</p>
          </div>
        </div>
    );
};

export default regimentPage;