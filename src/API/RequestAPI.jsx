export class API
{
    static getMasterWorkURL(state)
    {
        return 'http://183.82.116.164:5432/master_work/'+state;
    }
    static getMasterViewURL(id,state)
    {
        return `http://183.82.116.164:5432/7/master_view_data/${id}/${state}`;
    }
    static getItemDetailsURL(masterId,itemId,state)
    {
        return `http://183.82.116.164:5432/7/master_view_data/${masterId}/${itemId}/${state}`
    }
    static getItemViewURL(masterId,itemId,state)
    {
        return `http://183.82.116.164:5432/7/item_view_data/${masterId}/${itemId}/${state}`   
    }
}