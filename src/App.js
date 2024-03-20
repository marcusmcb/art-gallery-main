import { Fragment } from 'react'

import './App.css'
import '@fontsource-variable/outfit'
import '@fontsource/outfit/300.css'
import '@fontsource-variable/big-shoulders-display'
import '@fontsource/big-shoulders-display/800.css'

import Footer from './components/Footer'
import Header from './components/Header'
import MainContentPrimary from './components/MainContentPrimary'
import MainContentSecondary from './components/MainContentSecondary'

const App = () => {
	return (
		<Fragment>
			<Header />
			<MainContentPrimary />
			<MainContentSecondary />
			<Footer />
		</Fragment>
	)
}

export default App
