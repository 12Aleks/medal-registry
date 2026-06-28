import Loader from "@/app/components/loader/index";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <Loader size={0.5}/>
        </div>
    );
}