import  {Route, Switch } from 'react-router-dom';
import MasterState from '../components/MasterState';
import GetProcess from '../getProcess';
import { Test } from '../components/test';
export default function Routes()
{
    return(
        <Switch>
            <Route exact path='/home' component={MasterState} />
            <Route exact path='/mwo/:mwoId' render={(routeProps)=> <Test {...routeProps}/>}/>
        </Switch>
    );
}