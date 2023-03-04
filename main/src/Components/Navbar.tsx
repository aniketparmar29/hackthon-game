import React from 'react'
import {Box,Grid,GridItem} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={4} bg='black'>
      <GridItem colSpan={1} h='40'
        color='tomato'
        alignItems={'center'} display='flex' justifyContent={'center'} >Logo</GridItem>
      <GridItem colSpan={1} h='40' color='tomato'
        alignItems={'center'}
        display='flex' justifyContent={'center'} >
        Games
      </GridItem>
      <GridItem colSpan={1} h='40' color='tomato'
        alignItems={'center'}
        display='flex' justifyContent={'center'} >
        Leaderboard
      </GridItem>
      <GridItem
        colStart={4}
        colEnd={6} h='40' color='papayawhip' alignItems={'center'} display='flex'
        justifyContent={'center'}>
        Login/SignUp
      </GridItem>
    </Grid>
  )
}





export default Navbar