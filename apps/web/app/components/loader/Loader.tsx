import styles from "./loader.module.scss";

interface LoaderProps {
    size?: number;
}

const Loader = ({ size = 1 }: LoaderProps) => {
    return (
        <div
            className={`flex items-center justify-center`}
            style={{ transform: `scale(${size})` }}
        >
            <div className={styles.loader}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className={styles.square}
                        style={{ animationDelay: `${-1.4285714286 * i}s` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Loader;