import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});

// Add more tests here
describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
    const events = screen.getAllByTestId("event-card");
    expect(events.length).toBeGreaterThan(0);
  })
  it("a list a people is displayed", () => {
    render(<Home />);
    const people = screen.getAllByTestId("people-card");
    expect(people.length).toBeGreaterThan(0);
  })
  it("a footer is displayed", () => {
    render(<Home />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", () => {
    render(<Home />);
    const event = screen.getByTestId("event-card");
    expect(event).toBeInTheDocument();    
  })
});
