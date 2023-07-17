import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Welcome to Phonebook</title>
                </Helmet>
            </HelmetProvider>
            <div>
                <h1>Welcome to Phonebook</h1>
            </div>
        </>
    )
};

export default Home