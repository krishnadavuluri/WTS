import  {Route, Switch } from 'react-router-dom';
import Home from '../components/Main/Home';
import  Master  from '../components/Main/Master';
import Item from '../components/Main/Item';
export default function Routes()             //All routes of project
{
    return(
        <Switch>
            <Route exact path='/' component={Home} /> {/* To home */}
            <Route exact path='/Master/mwo/:mwoId/lang/:lang/state/:state' render={(routeProps)=> <Master {...routeProps}/>}/> {/*To Master view*/}
            <Route exact path='/Item/mwo/:mwoId/item/:itemId/lang/:lang/state/:state' render={(routeProps)=> <Item {...routeProps} />} /> 
        </Switch>
    );
}