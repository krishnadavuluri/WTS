import  {Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import  Master  from '../components/Master';
import Item from '../components/Item';
export default function Routes()             //All routes of project
{
    return(
        <Switch>
            <Route exact path='/home' component={Home} /> {/* To home */}
            <Route exact path='/mwo/:mwoId' render={(routeProps)=> <Master {...routeProps}/>}/> {/*To Master view*/}
            <Route exact path='/item/:itemId' render={(routeProps)=> <Item {...routeProps} />} /> {/*To Item view*/}
        </Switch>
    );
}