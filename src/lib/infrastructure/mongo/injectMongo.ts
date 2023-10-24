import { NextRequest } from "next/server";

import log from "../../middleware/log/log";
import LogsConnection from "@/lib/infrastructure/LogsConnection";

export default (request: NextRequest) => {
    const connection = new LogsConnection();
    return log(request, connection);
};