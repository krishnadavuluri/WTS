
import { Colours } from '../styles/colours';
export default class Service
{
    static colour=Colours;
    static colourGenerator(length)
    {
        var colours=[];
        for(let i=0;i<length;i++)
        {
            colours=[...colours,Service.colour[Math.floor(Math.random()*Service.colour.length)]];
        }
        return colours;
    }
}