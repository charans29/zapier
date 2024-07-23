import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prismaClient = new PrismaClient();

router.get("/available", async (req, res) => {
    const availableActions = await prismaClient.availableActions.findMany({});
    res.json({
        availableActions
    })
});

export const actionRouter = router;