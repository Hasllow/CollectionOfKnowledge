package main

import "fmt"

func main() {
	// colors := make(map[int]string)

	colors := map[string]string{
		"red":   "#FF0000",
		"green": "#00FF00",
		"white": "#FFFFFF",
	}

	// delete(colors, 10)

	fmt.Println(colors)
	printMap(colors)
}

func printMap(c map[string]string) {
	for color, hex := range c {
		fmt.Println("The code code for color " + color + " is " + hex)
	}
}
