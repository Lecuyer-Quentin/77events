import { render, screen } from '@testing-library/react';
import Logo from '.';

describe("Logo component", () => {
    describe("When a logo is created", () => {
        it("should render the logo", () => {
            render(
                <Logo />
            )
            const logoElement = screen.getByTestId("logo");
            expect(logoElement).toBeInTheDocument();
        })
    })
    }
)