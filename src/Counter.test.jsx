import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Counter';

// test som ser om tallet starter på 0
test('should start count at 0', () => {
    render(<Counter/>)

    const paragraph = document.querySelector('p')
    expect(paragraph).toHaveTextContent( 'Count is: 0')
})

// test som øker med 1 hvis knappen + blir trykket på 
test('Counter should incremet when + button is clicked', () => {
    render(<Counter/>)

    expect(document.querySelector('p')).toHaveTextContent( 'Count is: 0')
    fireEvent.click(screen.getByText('+'))
    expect(document.querySelector('p')).toHaveTextContent( 'Count is: 1')

})

// test som minker med 1 hvis - knappen blir trykket på
test('Counter should decrement when - button is clicked', () => {
    render(<Counter/>)

    expect(document.querySelector('p')).toHaveTextContent( 'Count is: 0')
    fireEvent.click(screen.getByText('-'))
    expect(document.querySelector('p')).toHaveTextContent( 'Count is: -1')

})

// test som trykker på knappen mange ganer både minus og pluss slik at testen blir 1
test('Counter shuld be 1, if this test works', () => {
    render(<Counter/>)

    expect(document.querySelector('p')).toHaveTextContent( 'Count is: 0')
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('+'))

    expect(document.querySelector('p')).toHaveTextContent( 'Count is: 1')

})