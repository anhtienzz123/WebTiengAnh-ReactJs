import Footer from 'components/Footer';
import Header from 'components/Header';
import NotFound from 'components/NotFound';
import AdminPage from 'features/AdminPage';
import Login from 'features/Login';
import Vocabulary from 'features/Vocabulary';
import VocabularyCourse from 'features/VocabularyCourse';
import VocabularyNoteBook from 'features/VocabularyNoteBook';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import './App.css';

function App() {


  const username = useSelector(state => state.login.username);

  return (
    <div className="app">
      <BrowserRouter>

        <Header username={username ? username : localStorage.getItem('username')} />


        {/* style={{ backgroundColor: '#fcfaf2', height: '90vh' }} */}
        {/* rgb(239, 239, 239) */}
        <div style={{ backgroundColor: '#fcfaf2', padding: '10px 0px' }} >

          <Switch>

            <Redirect exact from="/" to="/TraTu" />



            <Route path="/TraTu" component={Vocabulary} />
            <Route path="/DangNhap" component={Login} />
            <Route path="/GhiChuTuVung" component={VocabularyNoteBook} />
            <Route path="/KhoaHocTuVung" component={VocabularyCourse} />
            <Route path="/Admin" component={AdminPage} />




            <Route component={NotFound} />

          </Switch>

        </div>

        {/* 
        <Switch>

          <Redirect exact from="/" to="/TraTu" />



          <Route path="/TraTu" component={Vocabulary} />
          <Route path="/DangNhap" component={Login} />
          <Route path="/GhiChuTuVung" component={VocabularyNoteBook} />
          <Route path="/KhoaHocTuVung" component={VocabularyCourse} />
          <Route path="/Admin" component={AdminPage} />




          <Route component={NotFound} />

        </Switch> */}



        {/* <Switch>

          <Redirect exact from="/" to="/TraTu" />

        

          <Route path="/TraTu" component={Vocabulary} />
          <Route path="/DangNhap" component={Login} />
          <Route path="/GhiChuTuVung" component={VocabularyNoteBook} />
          <Route path="/KhoaHocTuVung" component={VocabularyCourse} />
          <Route path="/Admin" component={AdminPage} />




          <Route component={NotFound} />

        </Switch> */}

        <Footer />


      </BrowserRouter >

    </div >
  );
}

export default App;
