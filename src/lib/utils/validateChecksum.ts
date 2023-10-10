import getTicket from "@/components/Auth/getTicket";
import getPrivateKey from "./getPrivateKey";

type Props = {
    checksum: Buffer,
    id: string,
}

const validateChecksum = async ({ checksum, id }: Props) => {
    const key = getPrivateKey();
    const request = await getTicket(id);
    
    return key.verify(request, checksum);
};

export default validateChecksum;