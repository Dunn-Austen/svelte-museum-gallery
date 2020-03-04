//jest-dom is not essential, but allows for convenient context
import '@testing-library/jest-dom/extend-expect'
//Receiving an error regarding the above string?
import { render, fireEvent } from '@testing-library/svelte'
import App from './App'

//No describe statements?
// test('shows proper heading when rendered', () => {
//   const { getByText } = render(App, { name: 'Rembrandt' })
//
//   expect(getByText('Rembrandt')).toBeInTheDocument()
// })
