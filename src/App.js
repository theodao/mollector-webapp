import { MainApp } from 'mollectorgame-sdk'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import useOpenApp from '~/hooks/useOpenApp'
import Home from '~/pages/Home'
import { selectOpenMarketplace, setOpenMarketplace } from '~/state/reducer/app'

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
      <MainApp isOpen={isOpenApp} isEmbeded={false} onHandleClose={onCloseApp} />
    </>
  )
}

export default App
