import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { TopBar } from './components/TopBar';

const useStyles = makeStyles(theme => ({
    root: {
      paddingTop: 64,
      height: '100%',
    },
    content: {
        height: '100%'
    }
}));

export function Main(props) {
    const { location, children } = props;
    const classes = useStyles();
    return(
        <div>
            <TopBar location={location}/>
            <main className={classes.content}>
            {children}
            </main>
        </div>
    );  
};