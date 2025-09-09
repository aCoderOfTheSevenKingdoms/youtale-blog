import type { CustomJwtPayload } from "../middlewares/authMiddleware.ts";

declare global{
    namespace Express{
        interface Request{
            user?: CustomJwtPayload;
        }
    }
}