import BasicCommentList from '../components/CommentList';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

import React, { useState } from 'react';

const BasicThreadView: React.FC = () => {
    const [isShowButton, setIsShowButton] = useState(false);

    const hideButton = () => {
        setIsShowButton(false);
    };

    const showButton = () => {
        setIsShowButton(true);
    };

    return (
        <div style={{ width: '25vw', margin: 'auto', textAlign: 'center' }}>
            <h3>{'Inspirational Quotes'}</h3>
            <h4>{'Thread started by Aiken'}</h4>
            <BasicCommentList styled={false} />
            <Link to="/">{`<- Back to threads`}</Link>
            <br />
            <br />

            <Typewriter
                onInit={(typewriter) => {
                    hideButton();
                    typewriter
                        .changeDelay(80)
                        .pauseFor(1500)
                        .typeString("It's a little plain isn't it?")
                        .callFunction(showButton)
                        .start();
                }}
            />
            {isShowButton && (
                <Button variant="contained" color="primary" component={Link} to="/thread/1/styled">
                    {'Yes'}
                </Button>
            )}
        </div>
    );
};

export default BasicThreadView;
