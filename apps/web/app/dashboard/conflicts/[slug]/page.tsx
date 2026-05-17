import {ConflictType, ErrorObject, MetadataType} from "@medal-registry/types";
import {getOneConflict} from "@/shared/api/conflictActions";
import Loader from "@/app/components/loader/Loader";
import ImageComponent from "@/app/components/image/ImageComponent";

type ConflictPageType = {
    params: Promise<{slug: string}>
}

export async function generateMetadata({params}: ConflictPageType): Promise<MetadataType> {
    const {slug} = await params;
    const data: ConflictType  = await getOneConflict(slug);

    return {
        title: data?.name,
        description: data?.description
    }
}

const ConflictPage = async ({params}: ConflictPageType) => {
    const {slug} = await params;
    const conflict: ConflictType  = await getOneConflict(slug);

    if (!conflict) return <div className="flex items-center justify-center h-full"><Loader size={0.5}/></div>

    return (
        <div className="flex  justify-center">
            {/*<ImageComponent url={conflict?.images?.at(0)} title={conflict.name} width={500} height={500} />*/}
            <div>
                <p>Description: {conflict.description}</p>
            </div>
        </div>
    );
};

export default ConflictPage;