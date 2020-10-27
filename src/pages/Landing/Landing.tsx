import { Box, Container, Fab, Toolbar } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React, { Fragment } from 'react';
import BackToTop from '../../components/BackToTop/BackToTop';
import Header from '../../components/Header/Header';
import './Landing.css';

export default function Landing(props: any) {
    return (
        <Fragment>
            <Header />
            <Toolbar style={{ minHeight: '0' }} id="back-to-top-anchor" />
            <Container>
                <Box my={2}>
                    {[...new Array(50)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
            <BackToTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </BackToTop>
        </Fragment>
    );
}
