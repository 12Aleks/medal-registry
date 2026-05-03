import Image from "next/image";

type ImagePropsType = {
    url?: string;
    title?: string;
    width?: number;
    height?: number;
}

const ImageComponent = ({url, title, height = 100, width = 100}: ImagePropsType) => {
    if (!url) {
        return (
            <Image
                src="/svg/missing-image.svg"
                width={width}
                height={height}
                alt="Image not found"
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