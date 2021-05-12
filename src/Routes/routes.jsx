import  {Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import  Master  from '../components/Master';
import Item from '../components/Item';
export default function Routes()             //All routes of project
{
    return(
        <Switch>
            <Route exact path='/' component={Home} /> {/* To home */}
            <Route exact path='/Master/mwo/:mwoId/lang/:lang' render={(routeProps)=> <Master {...routeProps}/>}/> {/*To Master view*/}
            <Route exact path='/Item/mwo/:mwoId/item/:itemId/lang/:lang' render={(routeProps)=> <Item {...routeProps} />} /> 
        </Switch>
    );
}