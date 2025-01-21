import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth"
import { Club } from "./pages/Club";
import { Membership } from "./pages/Registration";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Membership />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/club" element={<Club />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    
  </QueryClientProvider>
);

export default App;