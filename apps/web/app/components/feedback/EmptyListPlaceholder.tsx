type EmptyListPlaceholderType = {
    information: string;
}

const EmptyListPlaceholder = ({information}: EmptyListPlaceholderType) => {
    return (
        <div className="text-gray-500 text-center py-8 ">
            <h3 className="text-base border px-5 py-3 border-blue-800 rounded-md">{information}</h3>
        </div>
    );
};

export default EmptyListPlaceholder;