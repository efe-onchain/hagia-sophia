import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar.js'
import Crowdfunding from './pages/Crowdfunding/Crowdfunding.js';
import Bounties from './pages/Bounties/Bounties.js'
import Review from './pages/Review/Review.js'
import Research from './pages/Research/Research.js'
import Login from './pages/Login/Login.js'
import ResearchForm from './pages/Application/ResearchForm'
import { ResearchProvider } from './providers/subgraph';
import { useMemo } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


function App() {
  const subgraphClient = useMemo(() => {
    const defaultOptions = {
      query: {
        fetchPolicy: 'network-only',
      },
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
    };

    return new ApolloClient({
      uri: "https://api.thegraph.com/subgraphs/name/efesozen7/hagia-sophia-2",
      cache: new InMemoryCache(),
      defaultOptions: defaultOptions,
    });
  }, ["https://api.thegraph.com/subgraphs/name/efesozen7/hagia-sophia-2"]);
  return (
    <div className="App" id="outer-container">
      <NavigationBar/>
      <ApolloProvider client={subgraphClient}>

      <ResearchProvider>
      <Routes>
        <Route path='/' element={ <Crowdfunding/> } />
        <Route path='/Crowdfunding' element={ <Crowdfunding/> } />
        <Route path='/Bounties' element={ <Bounties/> } />
        <Route path='/Review' element={ <Review/> } />
        <Route path='/Research' element={ <Research/> } />
        <Route path='/Login' element={<Login/>} />
        <Route path='/ResearchForm' element={<ResearchForm/>} />
        
      </Routes>
      </ResearchProvider>
      </ApolloProvider>

    </div>
  );
}

export default App;
