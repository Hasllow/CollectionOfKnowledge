package main

func main() {
	// var card string = "Ace of Spades"

	cards := deck{"Ace of Diamonds"}
	cards = append(cards, newCard())

	cards.print()
}

func newCard () string {
	return "Ace of Spades"
}