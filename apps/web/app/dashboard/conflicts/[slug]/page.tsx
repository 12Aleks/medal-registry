import {ActionCatchState, ConflictType, MetadataType, ParamsPropsType} from "@medal-registry/types";
import {getOneConflict} from "@/shared/api/conflictActions";
import Index from "@/app/components/loader";
import ImageComponent from "@/app/components/image/ImageComponent";
import {isActionError} from "@/shared/utils/checkActionData";

export async function generateMetadata({params}: ParamsPropsType): Promise<MetadataType> {
    const {slug} = await params;
    const data: ConflictType | ActionCatchState  = await getOneConflict(slug);

    if (isActionError(data))  return {
        title: 'Data not found',
        description: 'Data not found',
    }

    return {
        title: data?.name,
        description: data?.description
    }
}

const ConflictPage = async ({params}: ParamsPropsType) => {
    const {slug} = await params;
    const conflict: ConflictType | ActionCatchState  = await getOneConflict(slug);

    if (isActionError(conflict)) return <div className="flex items-center justify-center h-full"><Index size={0.5}/></div>

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