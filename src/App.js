// Imports
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";

// Component
const App = () => {
	
	// Return
	return(
		<Router>

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

		</Router>
	);

};

// Export
export default App;