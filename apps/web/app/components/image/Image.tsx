import Image from "next/image";

type ImagePropsType = {
    url?: string;
    title?: string;
    width?: number;
    height?: number;
}

const ImageComponent = ({url, title, height, width}: ImagePropsType) => {
    return (
        <>
            url ? <Image src={url} width={width} height={height} alt={title}/>
            :<Image src={'/svg/missing-image.svg'} width={400} height={400} alt="Image no found" />
        </>
    );
};

export default Image;