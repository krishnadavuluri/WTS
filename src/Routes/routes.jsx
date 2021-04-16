import  {Route, Switch } from 'react-router-dom';
import Home from '../components/MasterState';
import  Master  from '../components/Master';
import Item from '../components/Item';
export default function Routes()
{
    return(
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/mwo/:mwoId' render={(routeProps)=> <Master {...routeProps}/>}/>
            <Route exact path='/item/:itemId' render={(routeProps)=> <Item {...routeProps} />} />
        </Switch>
    );
}