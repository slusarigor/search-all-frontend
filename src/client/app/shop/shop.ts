import {ShopAddresses} from "../shop_address/shop_address";

export class Shop {
    constructor(
        id?: number,
        name?: string,
        description?: string,
        created_at?: string,
        updated_at?: string,
        popularity?: number,
        shop_addresses?: ShopAddresses[]
    ) {}
}