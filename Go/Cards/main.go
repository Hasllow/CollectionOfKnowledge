package main

import "fmt"

func main() {
	// var card string = "Ace of Spades"

	cards := []string{"Ace of Diamonds"}
	cards = append(cards, newCard())

	for i, card := range cards {
		fmt.Println(i, card)
	}
}

func newCard () string {
	return "Ace of Spades"
}