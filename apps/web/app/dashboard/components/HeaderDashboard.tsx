import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";

type HeaderDashboardType = {
    title: string;
    link: string;
}

const HeaderDashboard = ({title, link}: HeaderDashboardType) => {
    return (
        <div className="flex justify-between items-center mb-6 ">
            <h1 className="text-2xl font-bold">{title}</h1>
            <Button variant="customBlue">
                <Link href={`/dashboard/${link}/create`}>
                    Add new medal
                </Link>
            </Button>
        </div>
    );
};

export default HeaderDashboard;