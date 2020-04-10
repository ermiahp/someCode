import { Module } from "@nestjs/common";
import { PostController } from "./posts.controller";
import { PostsServices } from "./posts.service";

@Module({
    providers:[PostsServices],
    controllers:[PostController]
})
export class PostModule {}