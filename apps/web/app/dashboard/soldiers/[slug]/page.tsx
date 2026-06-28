import React from 'react';
import {getOneSoldier} from "@/shared/api/soldierAction";
import {Metadata} from "next";
import {ActionCatchState, ParamsPropsType, SoldierType} from "@medal-registry/types";
import {isActionError} from "@/shared/utils/checkActionData";
import ErrorComponent from "@/app/components/error/ErrorComponent";
import {cn} from "@/lib/utils";

export async function generateMetadata({ params }: ParamsPropsType):Promise<Metadata>{
    const {slug} = await params;
    const soldier: SoldierType | ActionCatchState = await getOneSoldier(slug);

    if (isActionError(soldier)) {
        return {
            title: 'Soldier not found',
        }
    }
    return {
        title: soldier?.surname,
        description: `This is subpage related with a information about ${cn({[`${soldier.name}`]: soldier.name}, soldier?.surname)}`,
    }
}

const SoldierPage = async ({params}: ParamsPropsType) => {
    const {slug} = await params;
    const soldier: SoldierType | ActionCatchState = await getOneSoldier(slug);

    if (isActionError(soldier)) return  <ErrorComponent error={soldier} />

    return (
        <div className="p-6 space-y-6">
            <div className="border-b pb-4">
                <h2 className="text-2xl font-bold">{soldier.name} {soldier.surname}</h2>
                <p className="text-muted-foreground">Rank: {soldier.rank || "Rank not added"}</p>
                <p className="text-muted-foreground">Service number: {soldier.serviceNumber || "Service number not added"}</p>
            </div>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Soldier's awards</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                </div>
            </div>
        </div>
    );
};

export default SoldierPage;