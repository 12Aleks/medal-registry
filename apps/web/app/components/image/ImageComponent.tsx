import Image from "next/image";
import {cn} from "@/lib/utils";

type ImagePropsType = {
    className?: string;
    url?: string;
    title?: string;
    width?: number;
    height?: number;
}

const ImageComponent = ({url, title, height = 100, width = 100, className}: ImagePropsType) => {
    if (!url) {
        return (
            <Image
                src="/svg/missing-image.svg"
                width={width}
                height={height}
                alt="Image not found"
                className={cn(className)}
            />
        );
    }

    return (
        <Image
            src={url}
            width={width}
            height={height}
            alt={title ?? "image"}
        />
    );
};

export default ImageComponent;