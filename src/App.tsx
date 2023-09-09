import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './main.global.css';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BooksList } from './shared/BooksList';
import { Book } from './shared/BooksList/Book';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

function AppComponent() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {

        setMounted(true);

    }, [])

    let NoMatch = () => {
        return <p style={{ textAlign: 'center', marginBottom: '20px' }}>«404 — страница не найдена» </p>;
    };


    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>

                    <Layout>
                        <Header />
                        <Content>
                            <BooksList />
                        </Content>
                        <Routes>
                            <Route path='/' element={<Layout />}>
                                <Route path='books/:id' element={<Book />} />
                                <Route path="books" element={<BooksList />} />
                                <Route path="*" element={<NoMatch />} />
                            </Route>
                        </Routes>
                    </Layout>

                </BrowserRouter>
            )}
        </Provider>
    );
}

export const App = hot(() => <AppComponent />)

