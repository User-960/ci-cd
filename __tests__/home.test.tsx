import { render, screen } from '@testing-library/react'

import Home from '../src/components/screens/home/Home'

describe('Home', () => {
	test('renders a title', () => {
		render(<Home />)
		const titleElement = screen.getByTestId("title-docs")

		expect(titleElement).toBeInTheDocument()
	})
})