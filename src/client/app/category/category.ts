import { Tag } from './../tag/tag'
import { Shop } from "../shop/shop";

export class Category {
    constructor(name?:string,
                description?:string,
                parent_id?:number,
                created_at?:string,
                updated_at?:string,
                popularity?:number,
                tags?:Tag[],
                shops?:Shop[]
    ) {}
}