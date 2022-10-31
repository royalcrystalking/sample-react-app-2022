import BasicCommentList from '../components/CommentList';
import { Button, Card, CardContent, Fade, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

import React, { useState } from 'react';

const StyledThreadView: React.FC = () => {
    const [isShowTips, setIsShowTips] = useState(false);

    const showTips = () => {
        setIsShowTips(true);
    };

    return (
        <div style={{ width: '30vw', margin: 'auto' }}>
            <Typography style={{ padding: '1em 0' }}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(80)
                            .typeString("This is much better, isn't it?")
                            .pauseFor(1000)
                            .callFunction(showTips)
                            .start();
                    }}
                />
            </Typography>
            <Fade in={isShowTips} timeout={1000}>
                <Typography style={{ paddingBottom: '1em' }}>
                    {'Try looking at the '}
                    <a href="https://v4.mui.com/">{'Material UI'}</a>
                    {' docs to see what other components you can use!'}
                </Typography>
            </Fade>
            <Card>
                <CardContent>
                    <Typography component="p">{'Viewing thread:'}</Typography>
                    <Typography variant="h5" component="h5">
                        {'Inspirational Quotes'}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {'by Aiken'}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {'"The best way to predict the future is to invent it."'}
                        <br />
                        {'- Alan Kay'}
                    </Typography>
                </CardContent>
            </Card>

            <BasicCommentList styled={true} />

            <Link to="/">
                <Button variant="contained" color="secondary">
                    {'Back to threads'}
                </Button>
            </Link>
        </div>
    );
};

export default StyledThreadView;
