import { Controller, Get, Query } from "@nestjs/common";
import { PostsServices } from "./posts.service";

@Controller('posts')
export class PostController {
    constructor(private readonly postServices: PostsServices){};

    @Get('all')
    getAllPosts(@Query('page') page: number = 0, @Query('limit') limit: number = 10){
        return this.postServices.getAllPosts(page, limit);
    }

    @Get('searchbytitle')
    getSearchPostsByTitle(@Query('page') page: number = 0, @Query('limit') limit: number = 10, @Query('title') title: string = ""){
        return this.postServices.getSearchPostsByTitle(page, limit, title);
    }

    @Get('searchbyuseridandtitle')
    getSearchPostsByUserIdAndTitle(@Query('page') page: number = 0, @Query('limit') limit: number = 10, @Query('userId') userId: number = 0, @Query('title') title: string = ""){
        return this.postServices.getSearchPostsByUserIdAndTitle(page, limit, Number(userId), title);
    }
}