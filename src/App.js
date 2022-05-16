import { MainApp } from 'mollectorgame-sdk'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import useOpenApp from '~/hooks/useOpenApp'
import Home from '~/pages/Home'
import { selectOpenMarketplace } from '~/state/reducer/app'

const SwitchApp = () => {
  return (
    <Switch>
      <Route path="/">
        <Route component={Home} />
      </Route>
    </Switch>
  )
}

function App() {
  const isOpenApp = useSelector(selectOpenMarketplace)
  const { onCloseApp } = useOpenApp()

  return (
    <>
      <SwitchApp />
      <MainApp
        isOpen={isOpenApp}
        isEmbeded={false}
        onHandleClose={onCloseApp}
        injectedConnectorConfig={{
          supportedChainIds: [89, 56, 88],
        }}
        walletConnectorConfig={{
          rpc: { 56: 'https://solitary-snowy-river.bsc.quiknode.pro/16b4e8d1466a4e5c06c88145a2faed83b3661fd9/' },
          bridge: 'https://bridge.walletconnect.org',
          qrcode: true,
        }}
      />
    </>
  )
}

export default App
