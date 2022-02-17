import { FC } from 'react'

import { Box, Button, Typography } from '@ui'
import s from './styles.module.scss'

const Hero: FC = () => {
    return (
        <Box column center>
            <Box isAppContainer column center childrenSpacing={{mt: 4}}>
                <Typography className={s.title} color='primary' aria-label='Find. Integrate. Enjoy.'>
                    Find. <br />
                    Integrate. <br />
                    Enjoy. 
                </Typography>
                <Box gap='2rem'>
                    {['Give it a go', '*Useless button*'].map((txt) => {
                        const isBlack = txt === 'Give it a go'
                        return (
                            <Button 
                                key={txt}
                                palette={isBlack ? 'primary' : 'secondary'} 
                                spacing={{p: 1, px: 2}} 
                                style={{border: isBlack && '1px solid'}}
                                border={!isBlack}
                                fontSize='body2'
                        >
                                {txt}
                            </Button>
                        )
                    })}
                </Box>
                <span className={s.catch__phrase}>
                    Easycalorie provides you with a database to extract information about all the foods you can think of from there
                    <br />
                    and tools to accurately integrate those in your nutrition plan.
                </span>
            </Box>
        </Box>
    )
} 

export default Hero