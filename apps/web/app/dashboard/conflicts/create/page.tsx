import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import CreateConflictForm from "@/app/dashboard/conflicts/create-conflict-form";


const CreateConflictPage = () => {
    return (
        <div className="flex justify-center py-10">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>
                        Add conflict
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CreateConflictForm  />
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateConflictPage;