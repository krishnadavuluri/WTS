import  {Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import  Master  from '../components/Master';
import Item from '../components/Item';
import { AlertDismissibleExample } from '../components/alertBox';
export default function Routes()             //All routes of project
{
    return(
        <Switch>
            <Route exact path='/' component={Home} /> {/* To home */}
            <Route exact path='/mwo/:mwoId/lang/:lang' render={(routeProps)=> <Master {...routeProps}/>}/> {/*To Master view*/}
            <Route exact path='/mwo/:mwoId/item/:itemId/lang/:lang' render={(routeProps)=> <Item {...routeProps} />} /> {/*To Item view*/}
            {/* <Route exact path='/empty/:type' render={(routeProps)=> <AlertDismissibleExample {...routeProps} />} /> */}
        </Switch>
    );
}