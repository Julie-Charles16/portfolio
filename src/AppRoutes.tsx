// AppRoutes.tsx
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import PageWrapper from './components/page-wrapper'
import Layout from './components/layout'

export default function AppRoutes() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <Layout>
            <PageWrapper>
              <Home />
            </PageWrapper>
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <PageWrapper>
              <About />
            </PageWrapper>
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <PageWrapper>
              <Projects />
            </PageWrapper>
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <PageWrapper>
              <Contact />
            </PageWrapper>
          </Layout>
        }
      />
    </Routes>
  )
}
