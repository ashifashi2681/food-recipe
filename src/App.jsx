import React from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
		<>
			<Routes>
				<Route path="/food-recipe" element={<HomePage />} />
			</Routes>
		</>
  );
}

export default App

/* hello there */