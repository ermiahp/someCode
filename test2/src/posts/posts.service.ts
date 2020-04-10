import { Injectable } from "@nestjs/common";
import { Post } from './post.model';

var fs = require('fs');
var posts;
fs.readFile('src/posts/posts.json', function (err, data) {
    if (err) {
        throw err;
    }
    posts = JSON.parse(data);
});

var getPage = function(list, page: number, limit: number){
    if(list){
        let length = list.length;
        let start = page * limit;
        let end = Number(start) + Number(limit);
        if(start > length){
            return [];
        }
        if( end > length && start < length){
            let results = list.slice(start, length - 1);
            return [... results];
        }
        let results = list.slice(start, end);
        return [... results];
    }else{
        return [];
    }
}

@Injectable()
export class PostsServices {
    initFiles(){
        fs.readFile('src/posts/posts.json', function (err, data) {
            if (err) {
                throw err;
            }
            posts = JSON.parse(data);
        })
    }
    async getAllPosts(page: number, limit: number){
        var fs = require('fs');
        // var posts;
        fs.readFile('src/posts/posts.json', function (err, data) {
            if (err) {
                throw err;
            }
            posts = JSON.parse(data);
        });
        return [... getPage(posts, page, limit)]
    }

    getSearchPostsByTitle(page: number, limit: number, title: string){
        let newList = [...posts].filter(item =>{            
            if(item.title.includes(title) || title === "")
                return item
        })            
        if(newList.length < 2){
            return [... newList]
        }
        return getPage(newList, page, limit);
    }

    getSearchPostsByUserIdAndTitle(page: number, limit: number,  userId: number, title: string){        
        if( userId === 0)
            return this.getSearchPostsByTitle(page, limit,title);
        
        let filterById =  [...posts].filter(item =>{                        
            if(item.userId === userId){
                if(item.title.includes(title) || title === "")
                    return item
            }
                
        })
        return getPage(filterById, page, limit);              
    }
}