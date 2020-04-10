import {Test, TestingModule} from "@nestjs/testing";
import { INestApplication } from '@nestjs/common';
import { PostsServices } from "./posts.service";
import { PostModule } from "./posts.module";
import { PostController } from "./posts.controller";
import * as request from 'supertest';


var fs = require('fs');
var posts;
fs.readFile('src/posts/posts.json', function (err, data) {
    if (err) {
        throw err;
    }
    posts = JSON.parse(data);
});

describe('PostServices testing',() =>{
    let postServices: PostsServices;
    let postController: PostController;
    let app: INestApplication;

    beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        // controllers:[PostController],
        // providers:[PostsServices]
        imports:[PostModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    postServices = moduleFixture.get<PostsServices>(PostsServices);
    // postController = moduleFixture.get<PostController>(PostController);

    });


    describe('find all users', () =>{
        it('get all 10 firt element of array', async () =>{
            return request(app.getHttpServer())
            .get('/posts/all')
            .expect(200)
            .expect([]);
        })
    })
});
