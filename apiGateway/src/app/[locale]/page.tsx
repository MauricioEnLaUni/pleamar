import LoggedLanding from "@/components/Home/LoggedLanding";
import CallToAction from "./CallToAction";
import { getServerSession } from "next-auth";

const Index = async () => {
    const session = await getServerSession();

    return (
        <main>
            { session ? <LoggedLanding /> : <CallToAction /> }
        </main>
    );
}

export default Index;
