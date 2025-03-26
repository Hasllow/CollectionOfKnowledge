package main

import (
	"fmt"

	"example.com/note/note"
)

func main() {
	title, content := getNoteDate()

	userNote, err := note.New(title, content)

	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println("Title:", title)
	fmt.Println("Content:", content)
}

func getNoteDate() (string, string) {
	title := getUserInput("Title: ")
	content := getUserInput("Content: ")

	return title, content
}

func getUserInput(prompt string) string {
	fmt.Print(prompt)

	var value string
	fmt.Scanln(&value)

	return value
}
