import { AppFooter } from 'app/layouts/footers'
import { Typography, Box, Link } from '@ui'
import { Logo } from '../../layouts/logo'
import { Github, Twitter } from '@icons'

const HomeFooter = () => {
    const _items = [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiasodit!'
    ]
    
    const items = _items[0].split(' ').map(str => <Link key={str} to={str} align='left' palette='inherit' variant='bgless'>{str}</Link>)
    
    const cols = [
        {
            header: <Typography bold spacing={{pb: 1}} color='primary'>About this app</Typography>,
            items,
        },
        {
            header: <Typography bold spacing={{pb: 1}} color='primary'>If you wish to support us😍</Typography>,
            items
        },
        {
            header: <Typography bold spacing={{pb: 1}} color='primary'>About the author</Typography>,
            items
        },
        {
            header: <Typography bold spacing={{pb: 1}} color='primary'>Legal</Typography>,
            items
        },
    ]

    return (
        <AppFooter cols={cols}>
            <Box gap='1rem' column align='left'>
                <Logo />
                <span>Copyright © 2022 Easycalorie Inc. All rights reserved.</span>
            </Box>
            <Box gap='2rem'>
                <Link passHref to='https://github.com/EgorArndt' before={<Github />} iSize={30} palette='inherit' variant='bgless' />
                <Link passHref to='https://github.com/EgorArndt' before={<Twitter />} iSize={30} palette='inherit' variant='bgless' />
            </Box>
        </AppFooter>
    )
}

export default HomeFooter
