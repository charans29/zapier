"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./router/user");
const zap_1 = require("./router/zap");
const cors_1 = __importDefault(require("cors"));
const trigger_1 = require("./router/trigger");
const action_1 = require("./router/action");
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prismaClient = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/user", user_1.userRouter);
app.use("/api/v1/zap", zap_1.zapRouter);
app.use("/api/v1/trigger", trigger_1.triggerRouter);
app.use("/api/v1/action", action_1.actionRouter);
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prismaClient.availableTrigger.create({
            data: {
                id: "webhook",
                name: "Webhook",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIovxkR9l-OlwpjTXV1B4YNh0W_s618ijxAQ&s",
            }
        });
        yield prismaClient.availableActions.create({
            data: {
                id: "send-sol",
                name: "Send Solana",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10458YI0Lf1-Zx4fGwhWxI_x4oPCD034xaw&s"
            }
        });
        yield prismaClient.availableActions.create({
            data: {
                id: "email",
                name: "Send Email",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nd82eFk5SaBPRIeCpmwL7A4YSokA-kXSmw&s"
            }
        });
    });
}
seed();
app.listen(3000);
