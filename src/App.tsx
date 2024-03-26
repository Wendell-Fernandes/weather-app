// import Providers from '@contexts/index'

import Routes from './routes'
import Default from './shared/layouts/Default'

const App = () => {
	return (
		<>
			<Default>
				<Routes />
			</Default>
		</>
	)
}

export default App
