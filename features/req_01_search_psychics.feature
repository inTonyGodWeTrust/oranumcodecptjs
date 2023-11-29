@search-psychics
Feature: Searching Results with relevant psychics
	I want to find only results that matchs the searching

	Scenario Outline: Searching psychics and match the result
		Given Oranum site is open
		When I type <name> on search
		Then results contain <containWords> 

		Examples:
			| name   | containWords |
			| "Matt" | "matt"       |
			| "Myst" | "myst"       |
			| "Ann"  | "ann"        |
			| "psy"  | "psy"        |

