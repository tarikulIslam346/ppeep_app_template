export interface Order{
    order_id: number,
    merchant_id:number,
    client_id: number,
    client_phone_no: string,
    status: number,
    total_without_vat: number,
    total_vat: number,
    total_with_vat: number,
    discount_amount: number,
    delivery_charge : number,
    post_code: string,
    total_with_discount: number,
    delivery_address: String,
    created_at: string,
    updated_at: string
}
