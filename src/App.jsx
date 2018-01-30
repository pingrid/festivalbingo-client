import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';
import { theme } from './Theme';
import Bingo from './bingo/Bingo';
import './App.scss';
import RegisterUserContainer from './bingo/register/RegisterUserContainer';
import BoardContainer from './bingo/board/BoardContainer';
import Rules from './bingo/rules/Rules';

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Switch>
            <Route path="/register" component={RegisterUserContainer} />
            <Route path="/user/:userName" component={BoardContainer} />
            <Route path="/rules" component={Rules} />
            <Route path="*" component={Bingo} />
        </Switch>
    </MuiThemeProvider>
);

App.propTypes = {};

export default App;

