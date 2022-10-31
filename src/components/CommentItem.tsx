import Comment from '../types/Comment';

import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';

type Props = {
    comment: Comment;
    styled: boolean;
};

const useStyles = makeStyles({
    commentBody: {
        fontSize: 16,
        whiteSpace: 'pre-wrap',
        paddingBottom: '1em',
    },
    commentCard: {
        marginBottom: '1em',
    },
    metadata: {
        fontSize: 14,
    },
});

const CommentItem: React.FC<Props> = ({ comment, styled }) => {
    const classes = useStyles();

    if (styled) {
        return (
            <Card className={classes.commentCard}>
                <CardContent>
                    <Typography variant="body2" color="textPrimary" className={classes.commentBody} component="p">
                        {comment.body}
                    </Typography>
                    <Typography color="textSecondary" className={classes.metadata} gutterBottom>
                        {'Posted by ' + comment.author + ' on ' + comment.timestamp.toLocaleString()}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    // unstyled
    return (
        <li className={classes.commentBody}>
            {comment.body}
            <br />
            <em>{'posted by ' + comment.author + ' on ' + comment.timestamp.toLocaleString()}</em>
        </li>
    );
};

export default CommentItem;
