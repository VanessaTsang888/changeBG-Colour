import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

// Test Driven Development: process of elying on software requirements being converted to test cases before
// software is fully developed and tracking all software dev by repeatedly testing the sofware against all test cases.

// This is a simple jest test, for human readability we use the method signature "test(" .. 
// .. as part of the readable statement. 
// Example: "Test if h2 element contains the name of my app"
test("if h2 element contains the name of my App", () => {
    // The render method allows the test runner to create an instance of your component in it's virtual browser
    render(<App/>);
    
    // We retrieve our H2 Html Element by looking for a data-testid attribute called 'Title'
    const ourH2 = screen.getByTestId('Title')

    // We Expect the html within our H2 Element to read "Use this Input Box to change background colour to your fav colour"
    expect(ourH2.innerHTML).toBe("Use Input Box to change background colour");
})