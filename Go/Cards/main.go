package main

func main() {
	// cards := newDeck()

	// cards.saveToFile("MyCards.txt")
	cards := newDeckFromFile("MyCards.txt")
	cards.print()
}
