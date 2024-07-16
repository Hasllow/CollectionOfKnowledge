package main

func main() {
	cards := newDeck()

	cards.saveToFile("MyCards.txt")
}