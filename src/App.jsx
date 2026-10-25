import { useReducer } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { appReducer, initialAppState } from './app/appReducer'
import { products } from './data/products'
import { NavBarPages } from './components/NavBarPages'
import { AddProduct } from './pages/AddProduct'
import { Login } from './pages/Login'
import { ProductDetailsPage } from './pages/ProductDetailsPage'

function App() {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  return (
    <Routes>
      <Route
        path="/"
        element={<NavBarPages isAuthenticated={state.isAuthenticated} dispatch={dispatch} />}
      >
        <Route index element={<ProductDetailsPage state={state} dispatch={dispatch} products={products} />} />
        <Route path="add-product" element={<AddProduct />} />
      </Route>
      <Route path="/login" element={<Login dispatch={dispatch} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
