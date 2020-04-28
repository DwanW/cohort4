import { screen, render, fireEvent } from "@testing-library/react";
import React from 'react';
import LarryComp from "./LarryComp";

test("test LarryComp", async () => {

    const myCountFunc = jest.fn();

    render(<LarryComp myOnClickCount={myCountFunc}/>);

    const el = screen.getByText(/larry/i);

    fireEvent.click(
        el
    )
    click(/larry/i)
})

function click(txt){
    fireEvent.click(
        screen.getByText(txt)
    )
}