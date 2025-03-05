import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";
import { NewsPage } from "../pages/NewsPage/NewsPage";
import { PaymentAndDeliveryPage } from "../pages/PaymentAndDeliveryPage/PaymentAndDeliveryPage";
import { MainPage } from "../pages/MainPage/MainPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route
          path="/payment-and-delivery"
          element={<PaymentAndDeliveryPage />}
        />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
