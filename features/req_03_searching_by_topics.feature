@search-by-topic
Feature: Choose a Topic with relevant psychics
	I want to choose a topic and see all relevant psychics profiles in that topic

    Scenario Outline: Select a topic with relevant psychics
        Given Oranum site is open
        When I select the topic <topic>
        Then <topic> contains relevant psychics and no dublication

        Examples:
            | topic 		  | 
            | "Love"  		  | 
            | "Clairvoyance"  | 
            | "Tarot" 		  | 
            | "Astrology" 	  | 
            | "Dreams" 		  | 
            | "Family" 		  | 
            | "Career" 		  | 
            | "Numerology" 	  | 
            | "Pets" 		  | 
