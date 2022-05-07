import styled from 'styled-components'
import { Box, MainApp, Text } from 'mollectorgame-sdk'
import Layout from 'components/Layout'

const Wrapper = styled(Box)`
  position: relative;
`

const Home = () => {
  return (
    <Layout>
      <Text mb="10px">Home Page</Text>
      <Wrapper>
        <MainApp />
      </Wrapper>
    </Layout>
  )
}

export default Home
