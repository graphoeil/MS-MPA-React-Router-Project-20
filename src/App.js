// Imports
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import LoadingSpinner from "./components/ui/LoadingSpinner";

// Lazy loading, useful for refactoring graphoeil website ...
// We only load <NewQuote/> component when user visit /new-quote
const NewQuote = React.lazy(() => {
	// We must add Suspense component because React must
	// render something while downloading NewQuote
	return import('./pages/NewQuote');
});
const QuoteDetail = React.lazy(() => {
	return import('./pages/QuoteDetail');
});
const NotFound = React.lazy(() => {
	return import('./pages/NotFound');
});

// Component
const App = () => {
	
	// Return
	return(
		<Router>

			{/* Suspense for lazyloading */}
			<Suspense fallback={ <div className="centered"><LoadingSpinner/></div> }>

				{/* Layout will render specific components matching the route, 
				with the MainNavigation component above */}
				<Layout>
					<Switch>

						{/* Home to quotes redirect */}
						<Route path="/" exact>
							<Redirect to="/quotes?sort=asc"/>
						</Route>
						{/* Home */}

						{/* Quotes */}
						<Route path="/quotes" exact>
							<AllQuotes/>
						</Route>
						<Route path="/quotes/:quoteId">
							<QuoteDetail/>
						</Route>
						<Route path="/new-quote">
							<NewQuote/>
						</Route>
						{/* Quotes */}

						{/* 404 */}
						<Route path="*">
							<NotFound/>
						</Route>
						{/* 404 */}

					</Switch>
				</Layout>
				{/* Layout */}

			</Suspense>
			{/* Suspense for lazyloading */}

		</Router>
	);

};

// Export
export default App;