@psychic-livestream
Feature: Check buttons on livestream
        I want to get a sign up modal on livestream

	Background: Open Oranum site
		Given Oranum site is open

Scenario Outline: The sign up modal is displayed 
                Given that a live profile is open
                When I click on the <button> button
                Then a sign up modal is showed

                Examples:
                        | button              |
                        | "Get Credits"       |
                        | "Add to favorites"  |
                        | "Surprise buttons"  |
                        | "Call me button"    |
                        | "Buy credits button"|



